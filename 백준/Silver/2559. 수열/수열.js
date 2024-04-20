var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

n = n
  .trim()
  .split(" ")
  .map((v) => +v);

n = n[1];

input = input
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(sum, answer);
  }
  return answer;
}

console.log(solution(n, input));
