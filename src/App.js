import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import TradingView from "./components/TradingView/tradingView";
import Table from "./components/Table/Table";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./components/MainFeaturedPost/MainFeaturedPost";

const mainFeaturedPost = {
  title: "트레이딩뷰자리",
  description: "트레이딩뷰자리",
  image: "https://source.unsplash.com/random",
  imgText: "트레이딩뷰자리",
};

function App({ CoinList, upbitCoinPrice, BinanceCoinPrice }) {
  console.log("앱 갱신됨");
  return (
    <div className="App">
      <CssBaseline />
      <Header title="김프" />
      <Container maxWidth="lg" style={{ paddingTop: "100px" }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={1} style={{ paddingBottom: "24px" }}>
            <Table
              CoinList={CoinList}
              upbitCoinPrice={upbitCoinPrice}
              BinanceCoinPrice={BinanceCoinPrice}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}

export default App;
