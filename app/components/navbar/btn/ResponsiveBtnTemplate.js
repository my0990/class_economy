'use client'
import styles from './btn.module.css'

export default function ResponsiveBtn(props){
    return(
        <div className={styles.btn} {...props}>
            {props.children}
        </div>
    )
}