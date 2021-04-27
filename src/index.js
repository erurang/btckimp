import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// coinList
import CoinList from "./service/CoinList";
import upbitCoinPrice from "./service/upbit/Price";
import BinanceCoinPrice from "./service/binance/Price";
import "./service/binance/Price";

// css
import "./index.css";
import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    <App
      CoinList={CoinList}
      upbitCoinPrice={upbitCoinPrice}
      BinanceCoinPrice={BinanceCoinPrice}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 맨위에서 API를 내려주고
// 리스트아이템에서 만들아이템들 정렬하고..
