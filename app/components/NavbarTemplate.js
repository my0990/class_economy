'use client'
import Link from "next/link"
import SignoutBtn from "./SignoutBtn"
import LoginMenuBtn from "./LoginMenuBtn"
import styles from "../page.module.css"
import LoginBtn from "./LoginBtn"
import MenuBtn from "./MenuBtn"
import { useState, useEffect } from "react"
import Image from "next/image"
import ResponsiveBtnTemplate from "../template/navbar/ResponsiveBtnTemplate"

export default function NavBarTemplate({session}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
          setMenuOpen(false);
          console.log('test')
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    console.log('changed')
    };

    return(
        <div>
            <div className={styles.header}>
                <div  className={styles.headerWrapper} >
                <Link href='/' replace>
                    <div className={styles.logo}>
                        로고
                    </div>
                </Link>
                </div>
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
                :<div className={styles.headerWrapper}>

                <div className={styles.menuWrapper}>
                    {session ? <Link href={`/directory/${session.role}`}><MenuBtn>학생 정보</MenuBtn></Link> : null}
                    <Link href="/login"><MenuBtn>메뉴1</MenuBtn></Link>
                    <MenuBtn>메뉴2</MenuBtn>
                </div>
                <div className={styles.loginMenu}>
                    {session 
                    ?<SignoutBtn/>
                    :<> 
                    <LoginBtn />
                    <Link href='/signup'>
                        <LoginMenuBtn>회원가입</LoginMenuBtn>
                    </Link>
                    </>}
                </div>
            </div>}
            </div>
            {/* {menuOpen ? <div className={menuOpen ? styles.menuOpen : styles.menuClose}>
                <ResponsiveBtnTemplate>test1</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test2</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test3</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test4</ResponsiveBtnTemplate>

            </div> : null} */}
            <div className={menuOpen ? styles.menuOpen : styles.menuClose}>
                <ResponsiveBtnTemplate>test1</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test2</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test3</ResponsiveBtnTemplate>
                <ResponsiveBtnTemplate>test4</ResponsiveBtnTemplate>

            </div>
        </div>
    )
}