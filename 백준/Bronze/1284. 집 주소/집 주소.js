// How are you today?
// Quite well, thank you, how about yourself?
// I live at number twenty four.
// #

var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solution(input) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    answer = 0;
    if (input[i] === "0") {
      break;
    }
    answer += input[i].length + 1;
    let arr = input[i].split("");
    arr.forEach((element) => {
      if (element === "1") {
        answer += 2;
      } else if (element === "0") {
        answer += 4;
      } else {
        answer += 3;
      }
    });
    console.log(answer);
  }
}

solution(input);
