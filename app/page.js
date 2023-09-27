import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
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
                <div>
                    이미지
                </div>
            </div>
        </div>
    )
}
