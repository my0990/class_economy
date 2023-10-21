
import styles from './teacher.module.css'
import LottieAnimation from './Lottie'
import Link from 'next/link'
import StudentProfileItem from './StudentProfileItem'
import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
export default async function Teacher() {
    const db = (await connectDB).db("classroom_data")
    let result = await db.collection('my0990').find().toArray()
    const session = await getServerSession(authOptions)

    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
      })

    if(result.length != 0){
        return(
            <div>
                <StudentProfileItem result={result} id={session.id}/>
            </div>
        )
    } else {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LottieAnimation />
                <h1 className={styles.infoComment}>등록된 학생이 없습니다.&nbsp;
                    <Link href={`/qrcode/my0990`}>
                        <span>학생 추가하기</span>
                    </Link>

                </h1>
            </div>
        </div>
    )

    }

}

