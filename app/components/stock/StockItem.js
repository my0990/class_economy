import styles from "./stock.module.css"

export default function StockItem({name,price,amount,oldPrice}) {
    let profit = ((price/oldPrice)-1).toFixed(2)
    let different = price - oldPrice
    return (
        <div className={styles.wrapper}>
            <div className={styles.upperItem}>
                <div className={styles.stockName}>{name}</div>
                <div className={styles.stockPrice}>{price}원</div>
            </div>
            <div className={styles.belowItem}>
                <div className={styles.amount}>
                    {amount}주 &#183; {oldPrice}원
                </div>
                <div className={profit > 0 ? styles.profit : styles.loss}>
                    {different}{ `(${profit}%)`}
                </div>
            </div>
        </div>
    )
}