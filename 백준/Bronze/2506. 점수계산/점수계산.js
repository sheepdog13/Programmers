var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, input] = fs.readFileSync(filePath).toString().split("\n");
const inputData = input.split(" ").join("");

function solution(inputData) {
  let answer = 0;
  let cnt = 0;
  for (let x of inputData) {
    if (x === "1") {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

console.log(solution(inputData));
