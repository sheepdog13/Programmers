var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let m = +input.shift();
input = input
  .toString()
  .split(" ")
  .map((v) => +v);

function buyAll(money, stock) {
  const stockCnt = Math.floor(money / stock);
  const leftMoney = money - stock * stockCnt;
  return [stockCnt, leftMoney];
}

function solution(money, stockList) {
  let answer;
  let junMoney = money;
  let junStock = 0;
  let sungMoney = money;
  let sungStock = 0;
  let timing = 0;

  for (let i = 0; i < stockList.length; i++) {
    // 준현이 부터
    if (junMoney >= stockList[i]) {
      let [stockCnt, leftMoney] = buyAll(junMoney, stockList[i]);
      junStock += stockCnt;
      junMoney = leftMoney;
    }
  }
  for (let i = 1; i < stockList.length; i++) {
    // 성민이
    if (stockList[i] === stockList[i - 1]) {
      timing = timing;
    } else if (stockList[i] > stockList[i - 1]) {
      timing > 0 ? timing++ : (timing = 1);
    } else {
      timing > 0 ? (timing = -1) : timing--;
    }
    if (timing <= -3) {
      // 전량 매수
      let [stockCnt, leftMoney] = buyAll(sungMoney, stockList[i]);
      sungStock += stockCnt;
      sungMoney = leftMoney;
    }
    if (timing >= 3) {
      // 전량 매도
      sungMoney += stockList[i] * sungStock;
      sungStock = 0;
    }
  }
  sungMoney += sungStock * stockList[stockList.length - 1];
  junMoney += junStock * stockList[stockList.length - 1];

  if (sungMoney === junMoney) return (answer = "SAMESAME");
  else {
    sungMoney > junMoney ? (answer = "TIMING") : (answer = "BNP");
  }

  return answer;
}

console.log(solution(m, input));
