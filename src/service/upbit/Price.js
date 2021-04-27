const upbitCoinPrice = {};
const upbitPriceRate = {};

const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
ws.binaryType = "arraybuffer";

ws.onopen = (e) => {
  ws.send(
    JSON.stringify([
      { ticket: "kimp" },
      {
        type: "ticker",
        codes: [
          "BTC-ETH,",
          "BTC-LTC",
          "BTC-LRC",
          "BTC-QTUM",
          "BTC-OMG",
          "BTC-ZRX",
          "BTC-LINK",
          "BTC-MTL",
          "BTC-EOS",
          "BTC-SNT",
          "BTC-ETC",
          "BTC-DNT",
          "BTC-BNT",
          "BTC-TRX",
          "BTC-POWR",
          "BTC-ARK",
          "BTC-XRP",
          "BTC-ENJ",
          "BTC-STORJ",
          "BTC-KMD",
          "BTC-RCN",
          "BTC-BAT",
          "BTC-LSK",
          "BTC-MANA",
          "BTC-ADX",
          "BTC-ADA",
          "BTC-XLM",
          "BTC-WAVES",
          "BTC-ELF",
          "BTC-RLC",
          "BTC-IOST",
          "BTC-STEEM",
          "BTC-NCASH",
          "BTC-ZIL",
          "BTC-XEM",
          "BTC-SYS",
          "BTC-GRS",
          "BTC-LOOM",
          "BTC-REP",
          "BTC-TUSD",
          "BTC-CVC",
          "BTC-IOTX",
          "BTC-SC",
          "BTC-MFT",
          "BTC-DENT",
          "BTC-ARDR",
          "BTC-VET",
          "BTC-POLY",
          "BTC-GO",
          "BTC-PAX",
          "BTC-RVN",
          "BTC-BTT",
          "BTC-ATOM",
          "BTC-ALGO",
          "BTC-DOGE",
          "BTC-ANKR",
          "BTC-CHZ",
          "BTC-XTZ",
          "BTC-NKN",
          "BTC-STX",
          "BTC-KAVA",
          "BTC-BCH",
          "BTC-VITE",
          "BTC-OGN",
          "BTC-STPT",
          "BTC-CTSI",
          "BTC-HIVE",
          "BTC-CHR",
          "BTC-STMX",
          "BTC-DGB",
          "BTC-COMP",
          "BTC-SXP",
          "BTC-SNX",
          "BTC-MKR",
          "BTC-DAI",
          "BTC-JST",
          "BTC-SRM",
          "BTC-ANT",
          "BTC-CRV",
          "BTC-SAND",
          "BTC-NMR",
          "BTC-DOT",
          "BTC-LUNA",
          "BTC-RSR",
          "BTC-UNI",
          "BTC-OXT",
          "BTC-SUN",
          "BTC-NEAR",
          "BTC-FIL",
          "BTC-INJ",
          "BTC-AERGO",
          "BTC-AXS",
          "BTC-STRAX",
          "BTC-FOR",
          "BTC-GLM",
          "BTC-GRT",
          "BTC-JUV",
          "BTC-PSG",
          "BTC-CELO",
          "BTC-AUCTION",
          "BTC-LINA",
        ],
      },
      { format: "SIMPLE" },
    ])
  );
};

ws.onmessage = (e) => {
  const a = new TextDecoder("utf-8");
  const b = new Uint8Array(e.data);
  const c = JSON.parse(a.decode(b));

  upbitCoinPrice[c.cd] = c.tp;
  upbitPriceRate[c.cd] = c.scr;
};

ws.onerror = (e) => console.log(e);

// const binance = new Binance().options({
//   APIKEY: "0H4FwaTTlzyiqRU5lDr02HYIU2y88QP4AjQ9IwPgXvn3WpMjlkchfAXFHwrgRzwH",
//   APISECRET: "piWVNqOBfEIZbSvLFkuCNrIVSW7hybZqLVHL3VbAV2Jgzux3zH5JS18gIXuetwfc",
//   userServerTime: true,
//   test: true,
// });

// binance.prices("BTC", (error, ticker) => {
//   console.log("price of btc:", ticker);
// });

export default upbitCoinPrice;
