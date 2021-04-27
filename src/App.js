import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TradingView from "./components/TradingView/tradingView";
import Table from "./components/Table/Table";

function App({ CoinList, upbitCoinPrice, BinanceCoinPrice }) {
  return (
    <div className="App">
      <Header />
      <TradingView />
      <Table
        CoinList={CoinList}
        upbitCoinPrice={upbitCoinPrice}
        BinanceCoinPrice={BinanceCoinPrice}
      />
      <Footer />
    </div>
  );
}

export default App;
