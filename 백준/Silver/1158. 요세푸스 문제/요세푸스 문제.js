var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
const n = +input[0];
const k = +input[1];

function solution(n, k) {
  let answer = "<";
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 1; i <= k; i++) {
      if (i !== k) queue.push(queue.shift());
      else {
        answer += queue.shift() + ", ";
      }
    }
  }
  answer += queue.shift() + ">";
  return answer;
}

console.log(solution(n, k));
