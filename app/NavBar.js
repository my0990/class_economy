// 'use client'

import Link from "next/link"
import SignoutBtn from "./components/SignoutBtn"
import LoginMenuBtn from "./components/LoginMenuBtn"
import styles from "./page.module.css"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


export const dynamic = 'force-dynamic' 


export default async function NavBar(){
    // const  { data: session, status } = useSession();
    const session = await getServerSession(authOptions);
    console.log(session)
    return(
        <>
            <div style={{width:'100%', height:'80px'}}/>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link href='/'>
                        <div className={styles.logo}>
                            로고
                        </div>
                    </Link>
                    <div className={styles.menu}>
                        <Link href='/directory/teacher'>마이페이지</Link>
                    </div>
                    <div className={styles.loginMenu}>
                        
                        {session ?
                        <SignoutBtn/>
                        :
                    <> 
                    <Link href='/login'> 
                        <LoginMenuBtn>로그인</LoginMenuBtn>
                    </Link>
                    <Link href='/signup'>
                        <LoginMenuBtn>회원가입</LoginMenuBtn>
                    </Link>
                    </>}

            </div>

            </div>
            </div>
        </>
    )
}