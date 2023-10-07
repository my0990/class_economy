// 'use client'
import styles from './home.module.css'
import LottieAnimation from './Lottie'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'



  

export default async function Home() {
    let session = await  getServerSession(authOptions);
    console.log(session);
    console.log('test')
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LottieAnimation />
                <h1 className={styles.infoComment}>등록된 학생이 없습니다.&nbsp;
                    <Link href={`/test/${session.user.id}`}>
                        <span>학생 추가하기</span>
                    </Link>
                </h1>
            </div>
        </div>
    )

}