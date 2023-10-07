
import { useQRCode } from "next-qrcode"
export default function TestPage(props){
    const { Canvas } = useQRCode();
    return(
        <>
            <h1>test page</h1>
            <Canvas 
                text={process.env.NEXT_PUBLIC_URL_API_KEY + props.params.id}
                width={200}
            />
        </>
    )
}
