var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
function solution(arr) {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") break;
    answer = "yes";
    if (arr[i] !== [...arr[i]].reverse().join("")) answer = "no";
    console.log(answer);
  }
}

solution(input);
