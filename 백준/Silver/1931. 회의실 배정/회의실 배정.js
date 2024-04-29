var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
input = input.map((v) => v.split(" "));
function solution(n, arr) {
  let answer = (end = 0);
  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  for (let i = 0; i < n; i++) {
    if (end <= +arr[i][0]) {
      answer++;
      end = +arr[i][1];
    }
  }
  return answer;
}

console.log(solution(n, input));
