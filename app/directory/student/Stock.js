export default function Stock({stock,keys,currentPriceArray}) {
    return (
        <div>
            <table>

                <thead>
                    <tr>
                        <th >종목</th>
                        <th >평균 매입가</th>
                        <th >현재 가격</th>
                        <th >수익률</th>
                        <th >보유량</th>
                        <th >가치</th>
                    </tr>
                </thead>

                {
                    keys.map((a, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{a}</td>
                                    <td>{stock[a].price}원</td>
                                    <td>{currentPriceArray[a]}</td>
                                    <td>{currentPriceArray[a]  / stock[a].price * 100}%</td>
                                    <td>{stock[a].count}</td>
                                    <td>{stock[a].count * stock[a].price}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
}