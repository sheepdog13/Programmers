var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
function solution(arr) {
  let answer;
  let cnt;
  for (let x of arr) {
    answer = "YES";
    cnt = 0;
    for (let s of x) {
      if (cnt < 0) {
        answer = "NO";
        break;
      }
      if (s === "(") {
        cnt++;
      } else {
        cnt--;
      }
    }
    cnt === 0 ? (answer = "YES") : (answer = "NO");
    console.log(answer);
  }
}

solution(input);
