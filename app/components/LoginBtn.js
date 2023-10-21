'use client'

import {signIn , singOut} from 'next-auth/react'

export default function LoginBtn(){
    return (
        <button onClick={()=>{signIn()}}>로그인</button>
    )
}