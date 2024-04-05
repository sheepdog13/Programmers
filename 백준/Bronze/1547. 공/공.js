
var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 첫번째 input shift
const n = input.shift();
// input 가공
let inputdata = [];
// [[],[],[]] 이런식으로 가공
for (let i = 0; i < n; i++) {
  inputdata.push(input[i].split(" ").map((v) => +v));
}
function solution(inputdata) {
  // 볼이 들어있는 index를 true
  let cup = [true, false, false];

  for (let i = 0; i < n; i++) {
    // 바꾸는 번호의 index 1,2
    const firstIndex = inputdata[i][0] - 1;
    const secondIndex = inputdata[i][1] - 1;
    // 둘중 공이 들어있으면 값 교환
    if (cup[firstIndex] || cup[secondIndex]) {
      cup[firstIndex] = !cup[firstIndex];
      cup[secondIndex] = !cup[secondIndex];
    }
  }
  console.log(cup.findIndex((element) => element === true) + 1);
}

solution(inputdata);
