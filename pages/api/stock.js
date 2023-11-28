import { connectDB } from "@/util/database"

export default async function handler(req,res) {
    //매수일 경우
    //주식 평균가 조정 및 수량 증가 및 감소
    const db = (await connectDB).db("stock")
    req.body.data = JSON.parse(req.body.data)
    const stockName = req.body.data.stock_name
    const count = Number(req.body.data.count)
    const price = Number(req.body.data.price)
    let flag = 1
    const teacherID = req.body.data.teacher
    //사는지 파는지
    if(!req.body.data.buy){
        flag = -flag
    }

    if(req.body.data){
        const result = await db.collection(teacherID).findOne({id: req.body.data.id})
        if(result === null){
            let tmp = {}
            tmp['id'] = req.body.data.id
            tmp[stockName] = {}
            tmp[stockName]['price'] = price
            tmp[stockName]['count'] = count
            await db.collection(teacherID).insertOne(tmp)
        } else {
            if(result[stockName] == null){
                let tmp = {}
                tmp[stockName] = {}
                tmp[stockName]['price'] = price
                tmp[stockName]['count'] = count
                await db.collection(teacherID).updateOne({id: req.body.data.id},{$set: tmp})
            } else {
                let amt = result[stockName]['price'] * result[stockName]['count']
                console.log('testtest')
                console.log(amt)
                amt += price * count * flag
                console.log(amt)
                let average = 0
                if((result[stockName]['count'] + count * flag) != 0){
                    average += amt/(result[stockName]['count'] + count * flag)
                }
                console.log(average)
                let tmp = {}
                tmp[stockName] = {}
                tmp[stockName]['price'] = average
                tmp[stockName]['count'] = count * flag + result[stockName]['count']
                await db.collection(teacherID).updateOne({id:req.body.data.id},{ $set : tmp})
            }
        } 
        //돈 감소
        const db2 = (await connectDB).db("classroom_data")
        db2.collection(teacherID).updateOne({id: req.body.data.id},{$inc:{money: -count*price*flag}})
        
        // 로그 기록
        const db3 = (await connectDB).db("trade_log")
        db3.collection(teacherID).insertOne({to: req.body.data.id, money: -count * price * flag, orderDate: new Date()})


    }
    res.redirect(303,'/directory/stock_trading')
}