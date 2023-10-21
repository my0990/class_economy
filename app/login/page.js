'use client'

import SignWrapper from "@/app/components/SignWrapper"
import styles from "./login.module.css"
import ProfileIcon from "../components/ProfileIcon"
import lottie from "@/public/lotties/profile"
import SignInput from "../components/SignInput"
import SignBtn from "../components/SignBtn"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import { useEffect } from "react"
export default function Login() {
    const  { data: session, status } = useSession();
    const router = useRouter();
    const login = async (e) => {
        // 원래 실행되는 이벤트 취소
        e.preventDefault();
        // Form 안에서 이메일, 패스워드 가져오기
        const id = e.target.id.value;
        const password = e.target.password.value;
        const response = await signIn("credentials", {
            id,
            password,
            redirect: false,

        })

        if(response.error){
          alert('다시 확인해주세용')
        }  
    }

    useEffect(()=>{
        if(session){
            router.replace('/directory/' + session.user.role)
        }
    },[session])

    return(
        <div className={styles.contianer}>
            
            <form onSubmit={login}>
            <SignWrapper style={{height: '840px'}}>
                <h1 style={{textAlign:'center', fontSize:'1.5rem',margin:'60px 0 48px 0', color: '#666666', fontWeight: '600'}}>로그인</h1>
                <ProfileIcon lottie={lottie}/>
                <div className={styles.wrapper}>
                <div style={{fontSize:'18px', marginBottom: '16px', fontWeight:'600', color: '#666666'}} > 아이디를 입력하세요</div>
                <SignInput name='id'/>
                <div style={{fontSize:'18px', marginBottom: '16px', fontWeight:'600', color: '#666666'}} >비밀먼호를 입력하세요</div>
                <SignInput name='password' type='password'/>
                <SignBtn type='submit'>로그인</SignBtn>
                <div style={{width: '100%', textAlign:'center', fontSize:'14px', color: '#666666', marginTop: '32px'}}>비밀번호를 잃어버려써</div>
                </div>
            </SignWrapper>
            </form>
        </div>
    )
}