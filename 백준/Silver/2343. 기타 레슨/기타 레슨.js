var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let m = +input.shift().split(" ")[1];
input = input
  .toString()
  .split(" ")
  .map((v) => +v);

function solution(m, arr) {
  let answer = 0;
  let lt = Math.max(...arr);
  let rt = arr.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = Math.ceil((lt + rt) / 2);
    let sum = 0;
    let cnt = 1;
    for (let i = 0; i < arr.length; i++) {
      if (mid >= sum + arr[i]) {
        sum += arr[i];
      } else {
        sum = arr[i];
        cnt++;
      }
    }
    if (cnt <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
}

console.log(solution(m, input));
