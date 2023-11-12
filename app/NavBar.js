import Link from "next/link"
import SignoutBtn from "./components/SignoutBtn"
import LoginMenuBtn from "./components/LoginMenuBtn"
import styles from "./page.module.css"
import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import LoginBtn from "./components/LoginBtn"
import MenuBtn from "./components/MenuBtn"
export const dynamic = 'force-dynamic' 
export const revalidate = 0
export const fetchCache = 'force-no-store'
export default async function NavBar(){

    const session = await getServerSession(authOptions);
    console.log(session)
    return(
        <>
            <div style={{width:'100%', height:'80px'}}/>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link href='/' replace>
                        <div className={styles.logo}>
                            로고
                        </div>
                    </Link>
                    <div className={styles.menuWrapper}>
                        {session ? <Link href={`/directory/${session.role}`}><MenuBtn>학생 정보</MenuBtn></Link> : null}
                        <Link href="/login"><MenuBtn>메뉴1</MenuBtn></Link>
                        <MenuBtn>메뉴2</MenuBtn>
                    </div>
                    <div className={styles.loginMenu}>
                        
                        {session ?
                        <SignoutBtn/>
                        :
                    <> 
                    <LoginBtn />
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