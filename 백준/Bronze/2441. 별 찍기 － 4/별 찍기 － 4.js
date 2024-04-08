var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString();
function solution(input) {
  for (let i = 0; i < input; i++) {
    let star = "";
    for (let j = 0; j < input; j++) {
      if (j < i) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}

solution(input);
