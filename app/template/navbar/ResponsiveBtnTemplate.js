'use client'
import styles from './navbar.module.css'

export default function ResponsiveBtnTemplate(props){
    return(
        <div className={styles.btn}>
            {props.children}
        </div>
    )
}