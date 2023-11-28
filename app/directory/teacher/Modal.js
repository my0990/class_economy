import styles from "./teacher.module.css"
import { useState } from "react"
export default function Modal({setIsModalOpen, checkItems, id, moneyAction}){
    const [money,setMoney] = useState()

    const onSubmit = (e) => {
        if(checkItems.length == 0){
            alert('학생을 선택해주세요')
            e.preventDefault()
        } else if(money == 0){
            alert('보낼 금액을 입력하세요.')
            e.preventDefault()
        } 
    }

    const onChange = (e) => {
        setMoney(e.target.value)
    }
    return(
        <div className={styles.modal}>
            <form method="POST" action={`/api/post/${id}/deposit`}>
                <h1>받는 학생</h1>
                {checkItems.map((a,i)=>{
                    return(<span key={i}>{a}, </span>)
                })}
                <div style={{marginTop:"20px"}}>
                    <h1>얼마를 {moneyAction ? `보낼까요` : `거둘까요 `}?</h1>
                    <input style={{borderBottom: "1px solid black"}} autoComplete="off" value={money} onChange={onChange} name='money'/>원
                </div>
                <div style={{textAlign:"right", marginTop:"20px"}}>
                    <input style={{display:'none'}} name='data' value={JSON.stringify(checkItems)} readOnly/>
                    <input style={{display:'none'}} name='moneyAction' value={moneyAction} readOnly/>
                    <input style={{display:'none'}} name='id' value={id} readOnly/>
                    <button className={styles.modalBtn} onClick={onSubmit}>확인</button>
                    <button className={styles.modalBtn} onClick={()=>setIsModalOpen(false)} >취소</button>
                </div>
            </form>
        </div>
    )
}