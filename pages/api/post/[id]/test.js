import { connectDB } from "@/util/database"

export default async function handler(req,res) {
    const db = (await connectDB).db("classroom_data")
    req.body.data = JSON.parse(req.body.data)
    db.collection("my0990").updateMany({$or: req.body.data.map(a => new Object({id: a}))}, {$inc: {money: 125000}})

    console.log(req.body.data.map(a => new Object({id: a})))
    return (
        res.status(200).json('처리완료')
    )
}