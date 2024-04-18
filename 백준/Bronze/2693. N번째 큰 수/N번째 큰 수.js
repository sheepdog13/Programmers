var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();

function solution(arr) {
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);

    console.log(arr[i][2]);
  }
}

solution(input);
