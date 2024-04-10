var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputData = input.map((v) => +v);

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((acc, v) => acc + v, 0);
  let flag = 0;
  for (let i = 0; i <= 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = 1;
        break;
      }
      if (flag === 1) break;
    }
  }
  answer.sort((a, b) => a - b);
  for (let x of answer) console.log(x);
}

solution(inputData);
