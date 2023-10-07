'use client'
import Lottie from 'react-lottie-player'
import lottieJson from '../../public//lotties/loginCat.json'
import styles from './home.module.css'
export default function LottieAnimation() {
    return(
        <Lottie
        loop="loop"
        animationData={lottieJson}
        play
        className={styles.lottie}
    />
    )
}