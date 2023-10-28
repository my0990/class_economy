'use client'
import StudentProfile from './StudentProfile'
import styles from './teacher.module.css'
import { useEffect, useState } from 'react'
export default function StudentProfileItem({result,id}){
    const [checkItems, setCheckItems] = useState([])
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

    return(
        <div className={styles.StudentProfileItemContainer}>
            <div>
                <div className={styles.StudentProfileItemWrapper}>
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
                </div>
                <form method="POST" action={`/api/post/${id}/test`}>
                    <input style={{display:'none'}} name='data' value={JSON.stringify(checkItems)} readOnly/>
                    <button style={{border: '1px solid black'}}>일괄송금</button>
                </form>
                <button onClick={()=>{console.log(JSON.stringify(checkItems))}}>test</button>
            </div>
        </div>
    )
}