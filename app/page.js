import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

    return (
        <div className={styles.container}>
        <div className={styles.homeContainer}>
            <div className={styles.wrapper}>
                <div className={styles.textWrapper}>
                    <h1>Lorem</h1>
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
        </div>
        </div>
    )
}
