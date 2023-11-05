import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { connectDB } from "@/util/database";
export default async function Write() {
    let session = await getServerSession(authOptions)
    // let db = (await connectDB).db('class_economy');
    // console.log('--------')
    // console.log('--------')
    // console.log('--------')
    // fetch('https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=vPerECOlp%2FUpWdPNJVyUDFN6UXkjy4AUeV2k%2FXuRcs9YPQeqjmax8tddJQNBqnlPovTvjtfVIZKLMRikHnbHIw%3D%3D&numOfRows=2000&pageNo=1&resultType=json&mrktCls=KOSPI').then(response => {return response.json()})
    // .then(data => db.collection('stock').insertMany(data.response.body.items.item));

    if(session == null){
        return(
            <div>로그인해주세요</div>
        )
    } else {
        return (
            <div className="p-20"> 
                <h4>글작성</h4>
                <form action="https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=vPerECOlp%2FUpWdPNJVyUDFN6UXkjy4AUeV2k%2FXuRcs9YPQeqjmax8tddJQNBqnlPovTvjtfVIZKLMRikHnbHIw%3D%3D&numOfRows=10&pageNo=1&resultType=json" method="GET">
                    <input name="title" placeholder="글제목"/>
                    <input name="content" placeholder="글내용"/>
                    <button type="submit">버튼</button>
                </form>
            </div>
        )
    }

}