import styles from "./stock.module.css"

export default function StockItem({name,price,amount,oldPrice}) {
    let profit = ((price/oldPrice)-1)
    let different = price - oldPrice
    return (
        <div className={styles.wrapper}>
            <div className={styles.upperItem}>
                <div className={styles.stockName}>{name}</div>
                <div className={styles.stockPrice}>{price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
            <div className={styles.belowItem}>
                <div className={styles.amount}>
                    {amount}주 &#183; {parseFloat(oldPrice.toFixed(1)).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원
                </div>
                <div className={profit > 0 ? styles.profit : styles.loss}>
                    {parseFloat(different.toFixed(1)).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{ `(${parseFloat((profit*100).toFixed(1))}%)`}
                </div>
            </div>
        </div>
    )
}