// 'use client'
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './NavBar'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default function Home() {
    // const {data : session, status} = useSession();
    // const router = useRouter();


    // useEffect(()=>{

    //     if(session){

    //         // router.push('/directory/' + session.user.role)

    //     }
    // },[session])

    return (
        <>
        <NavBar />
        <div className={styles.container}>
        <div className={styles.homeContainer}>
            <div className={styles.wrapper}>
                <div className={styles.textWrapper}>
                    <h1>Lorem</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco
                    </p>
                </div>
                <div className={styles.imgWrapper}>
                    <Image 
                        src='/imgs/classroom.jpg'
                        alt='교실'
                        fill
                        style={{objectFit:"cover"}}
                    />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
