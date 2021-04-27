import React, { useState } from 'react';

import styles from "./TableItem.module.css"


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
            <td>{upbit}</td>
            <td>
                <div id="price">
                    {upbitPrice}
                </div>
            </td>
            <td>{binancePrice}</td>
            <td>{kimp}</td>
        </tr>
    );
}

export default TableItem;