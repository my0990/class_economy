'use client'
import styles from './page.module.css'
export default function Modal({data}){
    return(
        <div className={styles.modalWrapper}>
            <form>
                <div >
                    <h1 style={{fontSize: '2.4rem'}}>삼성전자</h1>
                    {/* <h1>{data.result.itmsNm}</h1> */}
                    <div style={{marginTop: '24px', textAlign: 'right'}}>
                        <input className={styles.modalInput}/>주 &#10005; 60000원
                        {/* <input className={styles.modalInput}/>주 &#10005; {data.result.mkp}원 */}
                    </div>
                    <div style={{textAlign: 'right'}}>

                        <div><span style={{marginRight:'24px'}}>총</span><span style={{fontSize:'1.6rem', color:'red'}}>100000</span>원</div>
                    </div>
                    <div className={styles.modalBtnWrapper}>
                        <button style={{backgroundColor:'red'}}>매수</button>
                        <button style={{backgroundColor:'blue'}}>매입</button>
                    </div>
                </div>
            </form>
        </div>
    )
}