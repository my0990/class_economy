import styles from './student.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { connectDB } from "@/util/database"
import Chart from './Chart'




export default async function Student(){
    //한국 시간 구하기
    const now = new Date();
    const utc = now.getTime()
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const current = new Date(utc+koreaTimeDiff);

    // let current = new Date()
    console.log('현재: ',current)
    let target = current.getDate();
    current.setDate(target - 7);
  


    const session = await getServerSession(authOptions);
    const db = (await connectDB).db("classroom_data")
    let result = await db.collection(session.teacher).find({id: session.id}).toArray()
    const db2 = (await connectDB).db("trade_log")
    let log = await db2.collection("my0990").find({$and: [{to: session.id, orderDate: {"$gte": current}}]}).toArray()
    let compare  = new Date(new Date().setHours(9, 0, 0, 0));

    let money_log = [{date:`${compare.getMonth()+1}월 ${compare.getDate()}일`, money:result[0].money}]
    let money2 = result[0].money
    let count = 6
    while(log.length != 0 || count > 0){
        if(log.length == 0){
            let tmp = compare.getDate()
            compare.setDate(tmp - 1)
            money_log.unshift({date:`${compare.getMonth()+1}월 ${compare.getDate()}일`,money:money2})

            count -= 1
            continue
        }
        let popped = log.pop()
        if(popped.orderDate - compare > 0){
            console.log(popped.money)
            money2 -= popped.money
        } else {
            let tmp = compare.getDate()
            compare.setDate(tmp - 1)
            money_log.unshift({date:`${compare.getMonth()+1}월 ${compare.getDate()}일`,money:money2})
            money2 -= popped.money
            count -= 1
        }
    }
    console.log('----------')
    console.log('----------')
    console.log(money_log)
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.profileWrapper}>       
                    <div className={styles.profileIcon}>
                        <Image 
                            src="/imgs/profileIcon.png"
                            width={160}
                            height={160}
                            alt="profile"
                        />
                    </div>
                    <div className={styles.profileName}>{session ? session.name : null}</div>
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.moneyInfo}>
                        <h3>보유 금액</h3>
                        <h1>{result[0].money}원</h1>
                        <Chart date={money_log}/>
                    </div>
                    <div className={styles.stockInfo}>

                    </div>
                </div>
            </div>
        </div>
    )
}