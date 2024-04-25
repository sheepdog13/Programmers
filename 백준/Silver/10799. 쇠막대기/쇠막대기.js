var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      if (s[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution(input));
