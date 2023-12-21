'use client'
import Link from "next/link"
import SignMenuBtn from "./btn/SignMenuBtnTemplate"
import styles from "./navbar.module.css"
import MenuBtn from "./btn/MenuBtnTemplate"
import { useState, useEffect } from "react"
import Image from "next/image"
import ResponsiveBtn from "./btn/ResponsiveBtnTemplate"
import {signIn , signOut} from 'next-auth/react'

export default function NavBarTemplate({session}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
          setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return(
        <div>
            <div className={styles.header}>
                <div  className={styles.headerWrapper} >
                <Link href='/' replace>
                    <div className={styles.logo}>
                        <Image 
                            src="/imgs/logo.png"
                            width={100}
                            height={80}
                            alt="logo"/>
                    </div>
                </Link>
                {isMobile 
                ? <div style={{display: 'flex', alignItems:'center'}}>
                    <div className={styles.hamburgerBtn} onClick={handleMenuToggle}>
                        <Image 
                        src="/imgs/hamburger.png"
                        width={40}
                        height={40}
                        alt="hamburger"/>
                    </div>
                </div>
                :
                session
                ? session.role === 'teacher' 
                ? <div className={styles.menuWrapper}>
                    <Link href={`/directory/${session.role}`}><MenuBtn>교실 화폐 관리</MenuBtn></Link>
                    <Link href="/directory/stock_trading"><MenuBtn>학생 아이템 관리</MenuBtn></Link>
                    <Link href={`/qrcode/${session.id}`}><MenuBtn>가입용 QR코드</MenuBtn></Link>
                </div> 
                :<div className={styles.menuWrapper}>
                    <Link href={`/directory/stock_trading`}><MenuBtn>주식 매매하기</MenuBtn></Link>
                    <Link href="/"><MenuBtn>아이템 사기</MenuBtn></Link>
                    <Link href="/"><MenuBtn>인벤토리</MenuBtn></Link>
                </div> 
                : null}
                {isMobile ? null
                    :<div className={styles.loginMenu}>
                    {session 
                    ?<SignMenuBtn onClick={()=>{signOut({callbackUrl: 'http://localhost:3000/'})}}>로그아웃</SignMenuBtn>
                    :<> 
                    <SignMenuBtn onClick={()=>{signIn()}}>로그인</SignMenuBtn>
                    <Link href='/signup'>
                        <SignMenuBtn>회원가입</SignMenuBtn>
                    </Link>
                    </>}
                </div>}
            </div>
            </div>
            <div className={menuOpen ? styles.menuOpen : styles.menuClose}>
                {session 
                ? <Link href={`/directory/${session.role}`}><ResponsiveBtn>내 정보</ResponsiveBtn></Link> : null}    
                <Link href="directory/stock_trading"><ResponsiveBtn>주식 매매</ResponsiveBtn></Link>
                <ResponsiveBtn>메뉴2</ResponsiveBtn>
                {session 
                    ?<ResponsiveBtn onClick={()=>{signOut({callbackUrl: 'http://localhost:3000/'})}}>로그아웃</ResponsiveBtn>
                    :<> 
                    <ResponsiveBtn onClick={()=>{signIn()}}>로그인</ResponsiveBtn>
                    <Link href='/signup'>
                        <ResponsiveBtn>회원가입</ResponsiveBtn>
                    </Link>
                    </>}
            </div>
        </div>
    )
}