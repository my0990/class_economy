import { connectDB } from "@/util/database"

export default async function Post(req,res) {
    const db = (await connectDB).db("test")
    db.collection('post').insertOne({title: 'test22'})
    
    return (
        res.status(200).json('처리완료')
    )
}