import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import LoginMenuBtn from './components/LoginMenuBtn'
// pages/_app.js
import {Noto_Sans_KR} from 'next/font/google' // 해당 폰트의 함수를 사용합니다.
import dotenv from 'dotenv'
import AuthSession from '@/AuthSession'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import SignoutBtn from './components/SignoutBtn'
import Test from './Test'
import NavBar from './NavBar'
dotenv.config();

const notoSansKr = Noto_Sans_KR({
    // preload: true, 기본값
    subsets: ["latin"], // 또는 preload: false
    weight: ["400"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});
export const metadata = {
    title: 'class economy',
    description: 'class curreny manager'
}

export default async function RootLayout(props) {
    const session = await  getServerSession(authOptions);
    return (
        <html lang="ko">

            <body className={notoSansKr.className}>
            <AuthSession>
                {/* <div 
                    style={{width:'100%', height:'80px'}}
                />
                <div className={styles.header}>
                    <div className={styles.headerWrapper}>
                        <Link href='/'>
                        <div className={styles.logo}>
                            로고
                        </div>
                        </Link>
                        <div className
                        ={styles.menu}></div>
                        <div className={styles.loginMenu}> 
                            {session 
                            ? <SignoutBtn /> 
                            : <>
                            <Link href='/login'>
                                <LoginMenuBtn>로그인</LoginMenuBtn>
                            </Link>
                            <Link href='/signup'>
                                <LoginMenuBtn>회원가입</LoginMenuBtn>
                            </Link>
                            </>}

                            
                        </div>
                        
                    </div>
                </div> */}
                {/* <NavBar /> */}
                {props.children}
                </AuthSession>
            </body>
        </html>
    )
}
