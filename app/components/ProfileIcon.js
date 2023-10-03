'use client'
import Lottie from 'react-lottie-player'
import styles from './page.module.css'
export default function ProfileIcon({lottie}){
    return(
        <div className={styles.profileIcon_wrapper}>
            <Lottie
                loop="loop"
                animationData={lottie}
                play
                style={{width:'156px',height:'156px'}}
            />
        </div>
    )
}