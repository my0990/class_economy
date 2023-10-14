'use client'
import { signOut } from "next-auth/react"
import LoginMenuBtn from "./LoginMenuBtn"
export default function  SignoutBtn(){
    return(
        <LoginMenuBtn onClick={()=>{signOut({callbackUrl: 'http://localhost:3000/login'})}}>로그아웃</LoginMenuBtn>
    )

}