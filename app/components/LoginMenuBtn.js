import { Inter, Noto_Sans_KR} from 'next/font/google'



const notoSansKr = Noto_Sans_KR({
    // preload: true, 기본값
    subsets: ["latin"], // 또는 preload: false
    weight: ["400"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  });
  


export default function LoginMenuBtn(props){
    return(
        <button {...props} style={{fontSize: "24px", marginLeft:"16px", backgroundColor:"#EBEF95", padding: "5px 10px", borderRadius: "10px"}} className={notoSansKr.className}>{props.children}</button>
    )
}