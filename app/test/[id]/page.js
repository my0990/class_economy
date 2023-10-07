'use client'
import { useQRCode } from "next-qrcode"
export default function TestPage(props){
    const { Canvas } = useQRCode();
    return(
        <>
            <h1>test page</h1>
            <Canvas 
                text={'localhost:3000/student_signup/' + props.params.id}
                width={200}
            />
        </>
    )
}
