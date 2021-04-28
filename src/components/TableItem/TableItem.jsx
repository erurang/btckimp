import React, { useState } from 'react';
import styles from "./TableItem.module.css"

let exChange = 0

fetch("https://earthquake.kr:23490/query/USDKRW")
    .then((res) => res.json())
    .then((res) =>
        exChange = res["USDKRW"][0].toFixed(0)
    );

const TableItem = ({ upbit, binance, upbitCoinPrice, BinanceCoinPrice, UpbitList }) => {
    // console.log(upbitCoinPrice, '변하나체크');
    // 왜 이더리움만 못받아오지
    // if (upbit.includes('BTC')) console.log(BinanceCoinPrice[binance], binance);
    // console.log(BinanceCoinPrice)

    const [upbitPrice, setUpbitPrice] = useState(0)
    const [binancePrice, setBinancePrice] = useState(0)
    const [kimp, setKimp] = useState(0)
    const [scr, setScr] = useState(0)
    const [h52wp, setH52] = useState(0)
    const [l52wp, setL52] = useState(0)

    setInterval(() => {

        if (upbitCoinPrice[upbit] !== undefined && upbitPrice !== upbitCoinPrice[upbit][0]) {
            setUpbitPrice(upbitCoinPrice[upbit][0])
        }

        if (BinanceCoinPrice[binance] !== undefined && binancePrice !== BinanceCoinPrice[binance]) {
            setBinancePrice(parseInt(((BinanceCoinPrice[binance] * exChange).toFixed(0))))
        }

        if (upbitCoinPrice[upbit] !== undefined && upbitPrice !== upbitCoinPrice[upbit][0] && BinanceCoinPrice[binance] !== undefined && binancePrice !== BinanceCoinPrice[binance]) {
            setKimp(`${((((upbitCoinPrice[upbit][0] / (BinanceCoinPrice[binance] * exChange).toFixed(0)) * 100) - 100)).toFixed(2)}%`)
        }

        if (upbitCoinPrice[upbit] !== undefined && scr !== upbitCoinPrice[upbit][1]) {
            setScr(((upbitCoinPrice[upbit][1] * 100).toFixed(2)))
        }

        if (upbitCoinPrice[upbit] !== undefined && h52wp !== upbitCoinPrice[upbit][2]) {
            setH52(upbitCoinPrice[upbit][2])
        }

        if (upbitCoinPrice[upbit] !== undefined && l52wp !== upbitCoinPrice[upbit][3]) {
            setL52(upbitCoinPrice[upbit][3])
        }


    }, 500)


    const imgName = upbit.split("-")[1]
    const imgSrc = `https://static.upbit.com/logos/${imgName}.png`

    return (
        <tr className={styles.tr}>
            <td className={styles.td, styles.upbitName}>
                <div style={{ display: "flex" }}>
                    <div style={{ marginTop: "5px" }}>
                        <img className="coinImg" src={imgSrc} alt="BCH" title="BCH" width="20px" height="20px"></img>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <p>{UpbitList[upbit]}</p>
                        <p className={styles.engName}>{upbit}</p>
                    </div>
                </div>
            </td>
            <td className={styles.tp}>
                {upbitPrice.toLocaleString()}
            </td>
            <td className={styles.tp}>
                {binancePrice.toLocaleString()}
                <p className={styles.dollor}>${BinanceCoinPrice[binance]}</p>
            </td>
            {parseFloat(kimp) > 0 ? <td className={styles.up}>+{kimp}</td> : <td className={styles.down}>{kimp}</td>}
            {scr > 0 ? <td className={styles.up}> +{scr}% </td> : <td className={styles.down}> {scr}%</td>}
            {(((upbitPrice / h52wp) - 1) * 100) > 0 ? <td className={styles.remove}> <span className={styles.up}>+{(((upbitPrice / h52wp) - 1) * 100).toFixed(2)}%</span><p className={styles.up}>+{h52wp.toLocaleString()}</p> </td> : <td className={styles.remove}> <span className={styles.down}> {(((upbitPrice / h52wp) - 1) * 100).toFixed(2)}%</span> <p className={styles.down}>-{h52wp.toLocaleString()}</p> </td>}
            {(((upbitPrice / l52wp) - 1) * 100) > 0 ? <td className={styles.remove}> <span className={styles.up}>+{(((upbitPrice / l52wp) - 1) * 100).toFixed(2)}%</span><p className={styles.up}>+{l52wp.toLocaleString()}</p> </td> : <td className={styles.remove}>  <span className={styles.down}> {(((upbitPrice / l52wp) - 1) * 100).toFixed(2)}%</span> <p className={styles.down}>-{l52wp.toLocaleString()}</p> </td>}
        </tr>
    );
}

export default TableItem;