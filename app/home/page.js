'use client'
import styles from './home.module.css'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public//lotties/loginCat.json'
import Link from 'next/link'





  

export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Lottie
                    loop="loop"
                    animationData={lottieJson}
                    play
                    className={styles.lottie}
                />
                <h1 className={styles.infoComment}>등록된 학생이 없습니다.&nbsp;
                    <Link href='/test'>
                        <span>학생 추가하기</span>
                    </Link>
                </h1>
            </div>
        </div>
    )

}