## Coinstock javascript를 react로 개발했습니다.

- [x] Binance WEBSOCKET 연동
- [x] Upbit WEBSOCKET 연동
- [x] Table 생성
- [ ] Table sorting
- [ ] UI
- [x] 반응형
- [ ] Trading View
- [ ] Component 최적화

현재까지 계획은 위와 같습니다.

위까지 개발하면서 궁금했던것은 websocket에서 arraybuffer가 무엇인지
왜 rest api는 요청제한이 걸려있는 반면에 websocket은 그렇지않은지
websocket의 정의와 rest api의 정의에 대해 공부를 해봐야 할것 같습니다.

---- 현재까지의 구성상태

components
- Footer
  - footer.js : 하단 컴포넌트입니다
- Header
  - header.js : 상단 컴포넌트입니다
- MainFeaturedPost
  - MainFeaturedPost.js : 임시차트의 위치입니다 (구현x)
- Sidebar
  - Sidebar.js : 채팅 또는 광고란이 될 사이드입니다 (구현x)
- Table
  - Table.js : 테이블 틀입니다. 안에서 forEach로 TableItem을 생성합니다.
  - Table.module.css
- TableItem
  - TableItem.js : props로 받은 데이터들의 상태를 관리하고 테이블을 만듭니다
  - Table.module.css
<!-- - TradingView -->
- service
  - binance
    - Price.js : 바이낸스 websocket으로 가격을 가져옵니다
  - upbit
    - Price.js : 업비트 websocket으로 가격을 가져옵니다
  - CoinList.js : 업비트와 바이낸스의 코인종목을 모은 리스트파일입니다.
  - UpbitKoreaList.js : 업비트의 한글이름을 모은 리스트파일입니다.

현재의 데이터 흐름은 다음과 같습니다.

1. service의 Price.js에서 websocket으로 받은 정보들을 오브젝트에 매번 저장(덮어씌움)함
2. 오브젝트들을 export하여 index.js에 적용함
3. index.js에서 App으로 props를 통해 코인 가격/이름을 전달함
4. App.js에서 코인 가격/이름을 Table 컴포넌트에 전달함
5. Table 컴포넌트에서 코인 이름마다 forEach를 이용해서 TableItem을 만듬 TableItem에는 여전히 코인 가격정보가 내려감
6. TableItem에서 가격들을 state로 관리함. 처음 초기값을 지정후 price 종목명 과 비교해 현재값과 다를때 상태를 변경함.
7. setInterval로 변하는 Price값과 계속 비교하여 상태를 변경함.

이 상태인데.. 너무 하단 컴포넌트에서 많은것을 담당하고있는것같다.

지금 내가 하려는것은 하위컴포넌트는 단순히 View만 담당하도록 데이터처리 로직을 상위컴포넌트로 옮기려 하는 것이다.

즉 Table.js에서 CoinList / upbitCoinPrice / BinanceCoinPirce를 통하여 리스트를 만든다.
=> 애초에 Table에서 price를 Import해서 사용하면 될것같다. 굳이 props를 통해 전달전달할 필요는 없어보임

이 리스트는 websocket으로 오는 정보들로 매번 만든다. 

TableItem에는 Table에서 만든 데이터들만 표시를 해준다. item에서는 state값만 두어서 전의 상태와 다른지만 체크하고 다르다면 업데이트시킨다.

