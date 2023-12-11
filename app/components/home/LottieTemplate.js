'use client'
import Lottie from 'react-lottie-player'
import styles from './home.module.css'
export default function ProfileIcon({lottie}){
    return(
        <div className={styles.wrapper}>
            <Lottie
                loop="loop"
                animationData={lottie}
                play
                style={{width:'512px',height:'512px'}}
            />
        </div>
    )
}