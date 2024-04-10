var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [day, input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(day, carArr) {
  let answer = 0;
  for (car of carArr) {
    if (car === day) answer++;
  }
  console.log(answer);
}

solution(day, input);
