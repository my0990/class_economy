'use client'
import styles from './teacher.module.css'
import { useState } from 'react'
import Modal from './Modal'
export default function StudentProfileItem({result,id}){
    const [checkItems, setCheckItems] = useState([])
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [moneyAction, setMoneyAction] = useState(false)

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
                                <td>
                                    <input type='checkbox' key={a.id} id={a.id} onChange={checkItemHandler} checked={checkItems.includes(a.id) ? true : false}/>
                                </td>
                            </tr>
                        </tbody>
                        ) })}

                    </table>

            </div>
            {isModalOpen ?
                <div className={styles.modalWrapper} onClick={onParentClick}>
                    <Modal moneyAction = {moneyAction}  setIsModalOpen={setIsModalOpen} checkItems={checkItems} id={id}/>
                </div> : null}
            
        </div>
    )
}