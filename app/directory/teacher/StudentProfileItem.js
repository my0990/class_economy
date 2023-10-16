'use client'
import StudentProfile from './StudentProfile'
import styles from './teacher.module.css'
export default function StudentProfileItem({result}){
    return(
        <div className={styles.StudentProfileItemContainer}>
        <div className={styles.StudentProfileItemWrapper}>
            {result.map((a,i) => {
                return(
                    <div key={i}>
                        <div><StudentProfile money={a.money} name={a.name}/></div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}