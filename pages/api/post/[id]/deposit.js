import { connectDB } from "@/util/database"

export default async function handler(req,res) {
    const db = (await connectDB).db("classroom_data")
    req.body.data = JSON.parse(req.body.data)
    let data = req.body.data.map(a => new Object({id: a}))
    let money = Number(req.body.money)
    const id = req.body.id
    
    if(req.body.moneyAction === 'false'){
        money = - money
    }
    if(req.body.data){
        await db.collection(id).updateMany({$or: data}, {$inc: {money: money}})
        const db2 = (await connectDB).db("trade_log")
        const date = new Date()

        await db2.collection(id).insertMany(
            req.body.data.map(a => {
                return {to: a, money: money, orderDate: date}
            })
        )
    }
    res.redirect(303,'/directory/teacher')
}