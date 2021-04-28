import { useMemo } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import TradingView from "./components/TradingView/tradingView";
import Table from "./components/Table/Table";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import MainFeaturedPost from "./components/MainFeaturedPost/MainFeaturedPost";

// trading view
// const mainFeaturedPost = {
//   title: "트레이딩뷰자리",
//   description: "트레이딩뷰자리",
//   image: "https://source.unsplash.com/random",
//   imgText: "트레이딩뷰자리",
// };

// table

function App({ CoinList, upbitCoinPrice, BinanceCoinPrice, UpbitList }) {
  // 데이터를 어떻게 만들어야하나?
  // 이미지경로 / 한글종목명(영어종목명) / 업비트가격 / 바이낸스가격 / 김프계산 / 등락률 / 52주고 / 52저

  return (
    <div className="App">
      <CssBaseline />
      <Header title="김프" />
      <Container maxWidth="lg" style={{ paddingTop: "100px" }}>
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={1} style={{ paddingBottom: "24px" }}>
            <Table
              CoinList={CoinList}
              upbitCoinPrice={upbitCoinPrice}
              BinanceCoinPrice={BinanceCoinPrice}
              UpbitList={UpbitList}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="KIMP.BTC" description="" />
    </div>
  );
}

export default App;
