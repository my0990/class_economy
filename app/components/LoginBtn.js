'use client'

import {signIn , singOut} from 'next-auth/react'
import LoginMenuBtn from './LoginMenuBtn'
export default function LoginBtn(){
    return (
        <LoginMenuBtn onClick={()=>{signIn()}}>로그인</LoginMenuBtn>
    )
}