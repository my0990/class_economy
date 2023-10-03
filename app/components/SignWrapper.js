import styles from './page.module.css'

export default function SignWrapper(props) {
    return(
        <div className={styles.SignWrapper_wrapper} {...props}>
            {props.children}
        </div>
    )
}