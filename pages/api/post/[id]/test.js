import { connectDB } from "@/util/database"
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req,res) {
    const db = (await connectDB).db("classroom_data")
    req.body.data = JSON.parse(req.body.data)
    let data = req.body.data.map(a => new Object({id: a}))
    console.log(req.body.money)
    let money = Number(req.body.money)
    if(req.body.moneyAction === 'false'){
        money = - money
    }
    if(req.body.data){
        await db.collection("my0990").updateMany({$or: data}, {$inc: {money: money}})
        const db2 = (await connectDB).db("trade_log")
        const date = new Date()

        await db2.collection("my0990").insertMany(
            req.body.data.map(a => {
                return {to: a, money: money, orderDate: date}
            })
        )
        // await Promise.all(
        //     req.body.data.map(async (a) => await db2.collection("my0990").insertOne({to: a,money:money,date:date}))
        // )
    }
    

    // console.log(res)
    // return res.redirect('/test')

    res.redirect(303,'/directory/teacher')

}