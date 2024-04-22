var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input
  .shift()
  .split(" ")
  .map((v) => +v);

function solution(n, arr) {
  let answer = [];
  let cnt = 0;
  let hash = new Map();
  for (let i = 0; i < n; i++) {
    if (!hash.has(arr[i])) hash.set(arr[i], 1);
  }
  for (let i = n; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      cnt++;
      answer.push(arr[i]);
    }
  }
  console.log(cnt);
  answer.sort().map((v) => console.log(v));
}

solution(n[0], input);
