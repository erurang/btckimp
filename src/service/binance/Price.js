const BinanceCoinPrice = {};

const tradeList = [
  "btcusdt@miniTicker",
  "ethusdt@miniTicker",
  "neousdt@miniTicker",
  "ltcusdt@miniTicker",
  "qtumusdt@miniTicker",
  "adausdt@miniTicker",
  "xrpusdt@miniTicker",
  "eosusdt@miniTicker",
  "iotausdt@miniTicker",
  "xlmusdt@miniTicker",
  "ontusdt@miniTicker",
  "trxusdt@miniTicker",
  "etcusdt@miniTicker",
  "icxusdt@miniTicker",
  "vetusdt@miniTicker",
  "linkusdt@miniTicker",
  "wavesusdt@miniTicker",
  "bttusdt@miniTicker",
  "ongusdt@miniTicker",
  "zilusdt@miniTicker",
  "zrxusdt@miniTicker",
  "batusdt@miniTicker",
  "iostusdt@miniTicker",
  "omgusdt@miniTicker",
  "thetausdt@miniTicker",
  "enjusdt@miniTicker",
  "atomusdt@miniTicker",
  "tfuelusdt@miniTicker",
  "dogeusdt@miniTicker",
  "ankrusdt@miniTicker",
  "mtlusdt@miniTicker",
  "mftusdt@miniTicker",
  "cvcusdt@miniTicker",
  "chzusdt@miniTicker",
  "xtzusdt@miniTicker",
  "hbarusdt@miniTicker",
  "stxusdt@miniTicker",
  "kavausdt@miniTicker",
  "bchusdt@miniTicker",
  "lskusdt@miniTicker",
  "mblusdt@miniTicker",
  "stptusdt@miniTicker",
  "hiveusdt@miniTicker",
  "ardrusdt@miniTicker",
  "stmxusdt@miniTicker",
  "kncusdt@miniTicker",
  "repusdt@miniTicker",
  "scusdt@miniTicker",
  "sxpusdt@miniTicker",
  "storjusdt@miniTicker",
  "manausdt@miniTicker",
  "kmdusdt@miniTicker",
  "jstusdt@miniTicker",
  "srmusdt@miniTicker",
  "sandusdt@miniTicker",
  "dotusdt@miniTicker",
  "axsusdt@miniTicker",
  "straxusdt@miniTicker",
  "xemusdt@miniTicker",
  "pundixusdt@miniTicker",
  "btgusdt@miniTicker",
];

const ws = new WebSocket(
  "wss://stream.binance.com:9443/ws/" + tradeList.join("/")
);

ws.onopen = (e) => {};

ws.onmessage = (e) => {
  const parseData = JSON.parse(e.data);
  if (parseData !== undefined) {
    BinanceCoinPrice[parseData.s] = parseFloat(parseData.c).toFixed(2);
    // console.log(parseData.c);
  } else {
    console.log("dd");
  }
  // console.log(parseData);
};

export default BinanceCoinPrice;
