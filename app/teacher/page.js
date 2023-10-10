import styles from './teacher.module.css'
import LottieAnimation from './Lottie'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'



  

export default async function Teacher() {
    return (
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
