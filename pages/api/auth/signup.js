import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'


export default async function handler(req,res){

    if(req.method == 'POST') {
        if(req.body.id == '' || req.body.password == ''){
            return res.status(400).json('....')
            
        } else {
            let hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash
            req.body.role = 'teacher'
            let db = (await connectDB).db('class_economy');
            
            // let result = await db.collection('user_cred').findOne({email: req.body.email})
            // if(result){
            //     return res.status(400).json('다른 이메일을 사용하세요')
            // }
            await db.collection('user_cred').insertOne(req.body);
            return res.status(200).json('성공')
        }
    }

}

