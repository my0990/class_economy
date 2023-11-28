'use client'
import styles from './page.module.css'
import { useState } from 'react'
import { useSession } from 'next-auth/react';
export default function Modal({data}){
    const [total,setTotal] = useState();
    const [isBuy,setIsBuy] = useState(false);
    const { data: session } = useSession();
    const onChange = (e) => {
        setTotal(e.target.value)
    }
    const onSubmit = (e) => {
        console.log(isBuy)
    }
    return(
        <div className={styles.modalWrapper}>
            <form onSubmit={onSubmit} method="POST" action="/api/stock">
                <input style={{display: 'none'}} readOnly name='data' value={JSON.stringify({id: session.id, stock_name: data.result.itmsNm, count: total, price: data.result.mkp, buy: isBuy, teacher: session.teacher})}/>
                <div >
                    <h1>{data.result.itmsNm}</h1>
                    <div style={{marginTop: '24px', textAlign: 'right'}}>
                        <input className={styles.modalInput} value={total} onChange={onChange}/>주 &#10005; {data.result.mkp}원
                    </div>
                    <div style={{textAlign: 'right'}}> 
                        <div>
                            <span style={{marginRight:'24px'}}>총</span>
                            <span style={{fontSize:'1.6rem', color:'red'}}>{total ? total *  data.result.mkp : null}</span>원
                        </div>
                    </div>
                    <div className={styles.modalBtnWrapper}>
                        <button style={{backgroundColor:'red'}} onClick={()=>setIsBuy(true)}>매수</button>
                        <button style={{backgroundColor:'blue'}} onClick={()=>setIsBuy(false)} >매도</button>
                    </div>
                </div>
            </form>
        </div>
    )
}