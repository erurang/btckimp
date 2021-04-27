const BinanceCoinPrice = {};

const tradeList = [
  "ethbtc@miniTicker",
  "ltcbtc@miniTicker",
  "lrcbtc@miniTicker",
  "qtumbtc@miniTicker",
  "omgbtc@miniTicker",
  "zrxbtc@miniTicker",
  "linkbtc@miniTicker",
  "mtlbtc@miniTicker",
  "eosbtc@miniTicker",
  "sntbtc@miniTicker",
  "etcbtc@miniTicker",
  "dntbtc@miniTicker",
  "bntbtc@miniTicker",
  "trxbtc@miniTicker",
  "powrbtc@miniTicker",
  "arkbtc@miniTicker",
  "xrpbtc@miniTicker",
  "enjbtc@miniTicker",
  "storjbtc@miniTicker",
  "kmdbtc@miniTicker",
  "rcnbtc@miniTicker",
  "batbtc@miniTicker",
  "lskbtc@miniTicker",
  "manabtc@miniTicker",
  "adxbtc@miniTicker",
  "adabtc@miniTicker",
  "xlmbtc@miniTicker",
  "wavesbtc@miniTicker",
  "elfbtc@miniTicker",
  "rlcbtc@miniTicker",
  "iostbtc@miniTicker",
  "steembtc@miniTicker",
  "ncashbtc@miniTicker",
  "zilbtc@miniTicker",
  "xembtc@miniTicker",
  "sysbtc@miniTicker",
  "grsbtc@miniTicker",
  "loombtc@miniTicker",
  "repbtc@miniTicker",
  "tusdbtc@miniTicker",
  "cvcbtc@miniTicker",
  "iotxbtc@miniTicker",
  "scbtc@miniTicker",
  "mftbtc@miniTicker",
  "dentbtc@miniTicker",
  "ardrbtc@miniTicker",
  "vetbtc@miniTicker",
  "polybtc@miniTicker",
  "gobtc@miniTicker",
  "paxbtc@miniTicker",
  "rvnbtc@miniTicker",
  "bttbtc@miniTicker",
  "atombtc@miniTicker",
  "algobtc@miniTicker",
  "dogebtc@miniTicker",
  "ankrbtc@miniTicker",
  "chzbtc@miniTicker",
  "xtzbtc@miniTicker",
  "nknbtc@miniTicker",
  "stxbtc@miniTicker",
  "kavabtc@miniTicker",
  "bchbtc@miniTicker",
  "vitebtc@miniTicker",
  "ognbtc@miniTicker",
  "stptbtc@miniTicker",
  "ctsibtc@miniTicker",
  "hivebtc@miniTicker",
  "chrbtc@miniTicker",
  "stmxbtc@miniTicker",
  "dgbbtc@miniTicker",
  "compbtc@miniTicker",
  "sxpbtc@miniTicker",
  "snxbtc@miniTicker",
  "mkrbtc@miniTicker",
  "daibtc@miniTicker",
  "jstbtc@miniTicker",
  "srmbtc@miniTicker",
  "antbtc@miniTicker",
  "crvbtc@miniTicker",
  "sandbtc@miniTicker",
  "nmrbtc@miniTicker",
  "dotbtc@miniTicker",
  "lunabtc@miniTicker",
  "rsrbtc@miniTicker",
  "unibtc@miniTicker",
  "oxtbtc@miniTicker",
  "sunbtc@miniTicker",
  "nearbtc@miniTicker",
  "filbtc@miniTicker",
  "injbtc@miniTicker",
  "aergobtc@miniTicker",
  "axsbtc@miniTicker",
  "straxbtc@miniTicker",
  "forbtc@miniTicker",
  "glmbtc@miniTicker",
  "grtbtc@miniTicker",
  "juvbtc@miniTicker",
  "psgbtc@miniTicker",
  "celobtc@miniTicker",
  "auctionbtc@miniTicker",
  "linabtc@miniTicker",
];

const ws = new WebSocket(
  "wss://stream.binance.com:9443/ws/" + tradeList.join("/")
);

ws.onopen = (e) => {};

ws.onmessage = (e) => {
  const parseData = JSON.parse(e.data);
  BinanceCoinPrice[parseData.s] = parseData.c;
};

export default BinanceCoinPrice;
