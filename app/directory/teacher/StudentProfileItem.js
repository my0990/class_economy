'use client'
import StudentProfile from './StudentProfile'
import styles from './teacher.module.css'
import { useEffect, useState } from 'react'
import Modal from './Modal'
export default function StudentProfileItem({result,id}){
    const [checkItems, setCheckItems] = useState([])
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [moneyAction, setMoneyAction] = useState(false)
    const [money,setMoney] = useState(0)
    let checkList = result.map(a => a.id)


    const allCheckedHandler = (e) => {
        if (e.target.checked) {
            setCheckItems(checkList.map((item) => item))
        } else {
            setCheckItems([]);
        }
        console.log(`allCheck = `, e.target.checked)
    }
    const checkItemHandler = (e) => {
        // console.log(e.target.id)
        if (e.target.checked) {
            setCheckItems((prev) => [
                ...prev,
                e.target.id
            ]) // 불변성을 지키기 위한 원본 배열을 복사 후 추가
        } else {
            setCheckItems(checkItems.filter((item) => item !== e.target.id))
            // 현재 checkItems의 배열에서 해당 id를 제외한 새로운 배열 반환
        }

    }
    const onChange = (e) => {
        setMoney(e.target.value)
    }


    const onSubmit = (e) => {

        console.log('alert test')
        console.log(checkItems)
        if(checkItems.length == 0){
            alert('학생을 선택해주세요')
            e.preventDefault()
        } else if(money == 0){
            alert('보낼 금액을 입력하세요.')
            e.preventDefault()
        }
    }

    const onBtnClicked = (e) => {
        setIsModalOpen(true)
        if(e.target.name === 'send'){
            setMoneyAction(true)
        } else {
            setMoneyAction(false)
        }
        
    }
    const onParentClick = (e) => {
        if (e.target === e.currentTarget){
            setIsModalOpen(false)
        }
    }
    return(
        <div className={styles.StudentProfileItemContainer}>
            <div>
                {/* <div className={styles.StudentProfileItemWrapper}> */}
                    <div className={styles.btnWrapper}>
                        <button className={styles.moneyBtn} name="send" onClick={onBtnClicked}>돈 보내기</button>
                        <button className={styles.moneyBtn} name="take" onClick={onBtnClicked}>돈 빼앗기</button>
                    </div>
                    <table className={styles.table}>

                        <thead>
                            <tr>
                                <th className={styles.tableName}>이름</th>
                                <th className={styles.tableMoney}>보유금액</th>
                                <th className={styles.tableInput}><input type='checkbox' onChange={allCheckedHandler} checked={checkItems.length === checkList.length ? true : false}/></th>
                            </tr>
                        </thead>

                        {result.map((a,i)=>{ return(
                        <tbody key={i}>
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.money}원</td>
                                <td><input type='checkbox' key={a.id} id={a.id} onChange={checkItemHandler} checked={checkItems.includes(a.id) ? true : false}
   /></td>
                            </tr>
                        </tbody>
                        ) })}

                    </table>

                    {/* </div> */}

                
                {/* <form method="POST" action={`/api/post/${id}/test`}>
                    <input style={{display:'none'}} name='data' value={JSON.stringify(checkItems)} readOnly/>
                    <input value={money} onChange={onChange} name='money'></input>원<button style={{border: '1px solid black'}} onClick={onSubmit}>일괄송금</button>
                </form> */}
            </div>
            {isModalOpen ?
                <div className={styles.modalWrapper} onClick={onParentClick}>
                    <Modal moneyAction = {moneyAction}  setIsModalOpen={setIsModalOpen} checkItems={checkItems} id={id}/>
                </div> : null}
            
        </div>
    )
}