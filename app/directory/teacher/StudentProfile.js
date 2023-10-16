import styles from './teacher.module.css'
export default function StudentProfile({name,money}){
    return(
        <>
        <div className={styles.profile_container}>
            <div className={styles.profile_icon}></div>
            <div>name: {name}</div>
            <div>money: {money}</div>
        </div>
        </>
    )
}