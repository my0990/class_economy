import styles from './student.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { connectDB } from "@/util/database"
import Chart from './Chart'
import Stock from './Stock'




export default async function Student(){
    //시간 구하기 구하고 한국 기준으로 맞추기
    const now = new Date();
    const utc = now.getTime()
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const weekAgo = new Date(utc+koreaTimeDiff);
    let target = weekAgo.getDate();
    //일주일 전 시간
    weekAgo.setDate(target - 7);
  


    const session = await getServerSession(authOptions);
    //사용자가 가진 정보
    const db = (await connectDB).db("classroom_data")
    let result = await db.collection(session.teacher).find({id: session.id}).toArray()
    //사용자의 통화 거래 기록 가져와서 날짜별 보유 금액 계산
    const db2 = (await connectDB).db("trade_log")
    //7일 동안의 로그 불러오기
    let log = await db2.collection("my0990").find({$and: [{to: session.id, orderDate: {"$gte": weekAgo}}]}).toArray()
    //당일 자정
    let compare  = new Date(new Date().setHours(9, 0, 0, 0));
    //최종 결과물 담길 객체 배열, 오늘 날짜와 현재 가진 돈 넣어 놓기
    //{date: '4월 3일', money: 10000} 
    let money_log = [{date:`${compare.getMonth()+1}월 ${compare.getDate()}일`, money:result[0].money}]
    //현재 돈
    let money2 = result[0].money
    let count = 6
    while(log.length != 0 || count > 0){
        if(log.length == 0){
            //로그가 아무것도 남아 있지 않다면 그 전날 보유량 동일
            let tmp = compare.getDate()
            compare.setDate(tmp - 1)
            money_log.unshift({date:`${compare.getMonth()+1}월 ${compare.getDate()}일`,money:money2})
            count -= 1
            continue
        }
        //로그 남아 있으면 한개 추출
        let popped = log.pop()
        if(popped.orderDate - compare > 0){
            //기간 안에 있는거라면 돈 차감
            money2 -= popped.money
        } else {
            //기간 안에 있는게 아니라면
            //객체에 저장하고 카운트에서 1 빼기
            let tmp = compare.getDate()
            compare.setDate(tmp - 1)
            money_log.unshift({date:`${compare.getMonth()+1}월 ${compare.getDate()}일`,money:money2})
            money2 -= popped.money
            count -= 1
        }
    }
    //학생이 가진 주식 정보 가져오기
    const db3 = (await connectDB).db("stock")
    const stock = await db3.collection("my0990").find({id: session.id}).toArray();
    delete stock[0]['_id']
    delete stock[0]['id']
    const keys = Object.keys(stock[0]);
    let keysArray = keys.map(a => new Object({itmsNm: a}))

    //주식 시세 정보 가져오기
    const db4 = (await connectDB).db("class_economy")
    const currentPrice = await db4.collection('stock').find({$or:keysArray}).toArray()
    let currentPriceArray = new Object()
    currentPrice.map(a => currentPriceArray[`${a['itmsNm']}`] = Number(a['mkp']))

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
                        <Stock stock={stock[0]} keys={keys} currentPriceArray={currentPriceArray}/>
                    </div>
                </div>
            </div>
        </div>
    )
}