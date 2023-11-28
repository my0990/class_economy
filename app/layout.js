import './globals.css'
import {Noto_Sans_KR} from 'next/font/google' // 해당 폰트의 함수를 사용합니다.
import dotenv from 'dotenv'
import AuthSession from '@/AuthSession'
dotenv.config();

const notoSansKr = Noto_Sans_KR({

    subsets: ["latin"], // 또는 preload: false
    weight: ["400"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata = {
    title: 'class economy',
    description: 'class curreny manager'
}

export default async function RootLayout(props) {

    return (
        <html lang="ko">
            <body className={notoSansKr.className}>
                <AuthSession>
                    {props.children}
                </AuthSession>
            </body>
        </html>
    )
}
