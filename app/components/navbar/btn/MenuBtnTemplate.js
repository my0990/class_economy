import styles from './btn.module.css'
export default function MenuBtn(props){
    return(
        <div {...props} className={styles.menuBtn}>
            {props.children}
        </div>
    )
}