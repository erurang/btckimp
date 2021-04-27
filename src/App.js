import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TradingView from "./components/TradingView/tradingView";
import Table from "./components/Table/Table";
import "./App.css";

// material
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./components/MainFeaturedPost/MainFeaturedPost";
import Sidebar from "./components/Sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "트레이딩뷰자리",
  description: "트레이딩뷰자리",
  image: "https://source.unsplash.com/random",
  imgText: "트레이딩뷰자리",
};

const sidebar = {
  title: "채팅만들어",
  description: "채팅자리임ㅇㅇ",
};

function App({ CoinList, upbitCoinPrice, BinanceCoinPrice }) {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="김프" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={1} style={{ paddingBottom: "24px" }}>
            <Table
              CoinList={CoinList}
              upbitCoinPrice={upbitCoinPrice}
              BinanceCoinPrice={BinanceCoinPrice}
            />
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar title={sidebar.title} description={sidebar.description} />
          </Grid> */}
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
