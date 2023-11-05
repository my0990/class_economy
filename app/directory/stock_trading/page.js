'use client'
import { useState } from "react"
export default function Stock_trading(){
    const [keyword,setKeyword] = useState();
    const [data,setData] = useState();
    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    const onClick = async () => {
        console.log("fetch start")
        const res = await fetch("/api/search", {
            method: "POST",
            body: JSON.stringify({
                keyword: keyword
            })    
        })
        .then((response) => response.json()
        .then((data) =>setData(data))
        )

    }
    return(
        <div>
            주식 종목 검색
            <div>

                <input value={keyword} onChange={onChange}/>
                <button onClick={onClick}>검색하기</button>
                {data && data != '실패'
                ? <div>
                    <div>{data.result.itmsNm}</div>
                    <div>{data.result.mkp}</div>
                    <button>구매하기</button>
                </div> 
                : null}
            </div>
        </div>
    )
}