import styles from './teacher.module.css'
import Image from 'next/image'
import ProfileIcon from '@/app/components/ProfileIcon'
export default function StudentProfile({name,money}){
    return(
        <>
        <div className={styles.profile_container}>
            <div className={styles.profile_icon}>
                <div style={{width: '80px', height: '80px'}}>
                <Image 
                    src="/imgs/profileIcon.png"
                    alt="profile"
                    width={120}
                    height={120}
                    style={{objectFit:"cover"}}
                />
                </div>
            </div>
            <div>name: {name}</div>
            <div>money: {money}</div>
        </div>
        </>
    )
}