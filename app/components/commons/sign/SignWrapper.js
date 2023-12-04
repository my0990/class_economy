import styles from './sign.module.css'

export default function SignWrapper(props) {
    return(
        <div className={styles.wrapper} {...props}>
            {props.children}
        </div>
    )
}