
import styles from './teacher.module.css'
import LottieAnimation from './Lottie'
import Link from 'next/link'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
import StudentProfileItem from './StudentProfileItem'
import { connectDB } from "@/util/database"
export default async function Teacher() {
    const db = (await connectDB).db("classroom_data")
    let result = await db.collection('my0990').find().toArray()
    console.log(result)
    if(result.length != 0){
        return(
            <div>
                <StudentProfileItem result={result}/>
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

