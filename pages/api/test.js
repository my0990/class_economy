import { connectDB } from "@/util/database"

export default async function Post(req,res) {
    const db = (await connectDB).db("classroom_data")

    console.log('redirect test')
    let current = new Date()
    let target = current.getDate();
    current.setDate(target - 7);
    let result = await db.collection('stock').find({"itmsNm": '헝셩그룹'}).toArray()
    res.status(200).json(result)

}