'use client'
import Lottie from 'react-lottie-player'
import stock from '@/public/lotties/stock.json'
export default function LottieComponent(){
    return(
        <div>
            <Lottie
                loop="loop"
                animationData={stock}
                play
                style={{width:'100%',height:'100%'}}
            />
        </div>
    )
}