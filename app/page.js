import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './NavBar'


export default function Home() {
    return (
        <>
        <NavBar />
        <section>
        <div className={styles.container}>
        {/* <div className={styles.homeContainer}>
            <div className={styles.wrapper}>
                <div className={styles.textWrapper}>
                    <h1></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco
                    </p>
                </div>
                <div className={styles.imgWrapper}>
                    <Image 
                        src='/imgs/classroom.jpg'
                        alt='교실'
                        fill
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div> */}
        <h1 style={{fontSize:'3.2rem', marginTop: '3rem'}}>교실 화폐 관리 기능</h1>
        <div style={{fontSize:'1.6rem'}}>학생들에게 돈을 주고 빼앗아 보세요</div>
        </div>
        </section>
        </>
    )
}
