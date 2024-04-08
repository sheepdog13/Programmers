var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString();
function solution(input) {
  for (let i = 0; i < input; i++) {
    let star = "";
    for (let j = 0; j < input * 2; j++) {
      if (i <= j && j <= input * 2 - 2 - i) {
        star += "*";
      } else if (j > input * 2 - 2 - i) {
        break;
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

solution(input);
