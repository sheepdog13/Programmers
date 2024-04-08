var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString();
function solution(input) {
  const a = input - 1;
  for (let i = 0; i < input; i++) {
    let star = "";
    for (let j = 0; j < input * 2; j++) {
      if (a - i <= j && j <= a + i) {
        star += "*";
      } else if (j > a + i) {
        break;
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

solution(input);
