import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import LoginMenuBtn from './components/LoginMenuBtn'

export const metadata = {
    title: 'class economy',
    description: 'class curreny manager'
}

export default function RootLayout({children}) {
    return (
        <html lang="ko">
            <body className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        로고
                    </div>
                    <div className={styles.menu}></div>
                    <div className={styles.loginMenu}>
                        <Link href='/test'>
                            <LoginMenuBtn>로그인</LoginMenuBtn>
                        </Link>
                        <Link href='/'>
                            <LoginMenuBtn>회원가입</LoginMenuBtn>
                        </Link>
                    </div>
                </div>
                {children}
            </body>
        </html>
    )
}
