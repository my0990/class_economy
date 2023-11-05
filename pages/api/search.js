import { connectDB } from "@/util/database"
export default async function handler(req,res) {
    const db = (await connectDB).db("class_economy")
    const result = await db.collection('stock').findOne({itmsNm: JSON.parse(req.body).keyword})
    console.log(JSON.parse(req.body).keyword)
    {result ? res.send({result: result}) : res.status(400).json('실패')}

}