import { connectDB } from "@/util/database"
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]"
export default async function handler(req,res) {
    // const db = (await connectDB).db("classroom_data")
    // req.body.data = JSON.parse(req.body.data)
    // let data = req.body.data.map(a => new Object({id: a}))
    // console.log('-----------')
    // console.log(req.body.data)
    
    // let result = await db.collection("my0990").updateMany({$or: data}, {$inc: {money: 125000}})

    // console.log(res)
    // return res.redirect('/test')
    if(req.method == 'POST'){
        let session = await getServerSession(req, res, authOptions)
        // if(session){
        //     req.body.author = session.user.email
        // }
        // if(req.body.title == ''){
        //     return res.status(500).json('제목을 써주세요')
        // }
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').insertOne(req.body)
        res.status(200).redirect('/list')
    }
}