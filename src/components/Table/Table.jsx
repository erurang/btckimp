import React from 'react';
import TableItem from '../TableItem/TableItem';
import styles from "./Table.module.css"

const Table = ({ CoinList, upbitCoinPrice, BinanceCoinPrice }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>현재가(Upbit)</th>
                    <th>현재가(Binance)</th>
                    <th>김프</th>
                </tr>
            </thead>
            <tbody>
                {CoinList.map(list =>
                    <TableItem
                        upbit={list[0]}
                        binance={list[1]}
                        upbitCoinPrice={upbitCoinPrice}
                        BinanceCoinPrice={BinanceCoinPrice}
                        key={list[0]}
                    />)}
            </tbody>
        </table>
    )
}

export default Table;