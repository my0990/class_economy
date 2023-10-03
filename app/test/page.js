'use client'
import { useQRCode } from "next-qrcode"
export default function TestPage(){
    const { Canvas } = useQRCode();
    return(
        <>
            <h1>test page</h1>
            <h1>test page</h1>
            <h1>test page</h1>
            <h1>test page</h1>
            <Canvas 
                text={'naver.com'}
                width={200}
            />
        </>
    )
}