import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './NavBar'
import LottieTemplate from './components/home/LottieTemplate'
import lottie from '@/public/lotties/money'
import lottie2 from '@/public/lotties/stock'

export default function Home() {
    return (
        <>
            <NavBar />
            <section>
                <div className={styles.container}>
                    <h1 style={{ fontSize: '3.2rem', marginTop: '3rem' }}>교실 화폐 관리 기능</h1>
                    <div style={{ fontSize: '1.6rem' }}>학생들에게 돈을 주고 빼앗아 보세요</div>
                    <LottieTemplate lottie={lottie} />
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h1 style={{ fontSize: '3.2rem', marginTop: '3rem' }}>주식 모의 투자 기능</h1>
                            <div style={{ fontSize: '1.6rem' }}>학급 화폐를 사용하여 주식을 검색하고 매입, 매수할 수 있습니다.</div>
                        </div>
                        <LottieTemplate lottie={lottie2} />
                    </div>
                </div>
            </section>
        </>
    )
}
