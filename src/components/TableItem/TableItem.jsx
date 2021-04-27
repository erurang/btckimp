import React, { useState } from 'react';
import styles from "./TableItem.module.css"
import UpbitList from "../../service/UpbitKoreaList"

const TableItem = ({ upbit, binance, upbitCoinPrice, BinanceCoinPrice }) => {

    const [upbitPrice, setUpbitPrice] = useState(0)
    const [binancePrice, setBinancePrice] = useState(0)
    const [kimp, setKimp] = useState(0)

    setInterval(() => {

        if (upbitCoinPrice[upbit] !== undefined && upbitPrice !== upbitCoinPrice[upbit]) {
            setUpbitPrice(upbitCoinPrice[upbit].toFixed(8))
        }

        if (BinanceCoinPrice[binance] !== undefined && binancePrice !== BinanceCoinPrice[binance]) {
            setBinancePrice(BinanceCoinPrice[binance])
        }

        if (upbitCoinPrice[upbit] !== undefined && upbitPrice !== upbitCoinPrice[upbit] && BinanceCoinPrice[binance] !== undefined && binancePrice !== BinanceCoinPrice[binance]) {
            setKimp(`${(((upbitCoinPrice[upbit] / BinanceCoinPrice[binance]) * 100) - 100).toFixed(2)}%`)
        }

    }, 1500)

    return (
        <tr>
            <td className={styles.td, styles.upbitName}>
                <p>{UpbitList[upbit]}</p>
                {upbit}
            </td>
            <td className={styles.upbitPrice}>
                {upbitPrice}
            </td>
            <td>{binancePrice}</td>
            {parseFloat(kimp) > 0 ? <td className={styles.up}>+{kimp}</td> : <td className={styles.down}>{kimp}</td>}
        </tr>
    );
}

export default TableItem;