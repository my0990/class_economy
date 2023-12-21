import styles from './teacher.module.css'
import LottieAnimation from './Lottie'
import Link from 'next/link'
import StudentProfile from './StudentProfile'
import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function Teacher() {
    const db = (await connectDB).db("classroom_data")
    const session = await getServerSession(authOptions)
    let result = await db.collection(session.id).find().toArray()
    console.log(session)
    //학생 정보 불러오기
    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
      })
    //학생 정보 있을 경우
    if(result.length != 0){
        return(
            <div>
                <StudentProfile result={result} id={session? session.id : null}/>
            </div>
        )
    } else {
    //학생 정보 없을 경우 qr코드로 이동
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LottieAnimation />
                <h1 className={styles.infoComment}>등록된 학생이 없습니다.&nbsp;
                    <Link href={`/qrcode/${session.id}`}>
                        <span>학생 추가하기</span>
                    </Link>

                </h1>
            </div>
        </div>
    )

    }

}

