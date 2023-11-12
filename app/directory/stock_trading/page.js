'use client'
import { useState } from "react"
import styles from './page.module.css'
import Modal from "./Modal";
import LottieComponent from "./LottieComponent";
export default function Stock_trading(){
    const [keyword,setKeyword] = useState();
    const [data,setData] = useState();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    const onParentClick = (e) => {
        if (e.target === e.currentTarget){
            setIsModalOpen(false)
        }
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
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* <div className={styles.lottie}>
                    <LottieComponent />
                </div> */}
                <div className={styles.searchWrapper}>
                    {/* <h1 className={styles.searchTitle}>주식 종목 검색</h1> */}
                    <div className={styles.btnWrapper}>
                        <input value={keyword} onChange={onChange} className={styles.searchInput} placeholder="이름 또는 코드로 주식 종목 검색"/>
                        <button onClick={onClick} className={styles.searchBtn}>검색하기</button>
                    </div>
                    {data && data != '실패'
                    ? 
                        <Modal  data={data}/>
                    : null}
                </div>
            </div>
        </div>
    )
}