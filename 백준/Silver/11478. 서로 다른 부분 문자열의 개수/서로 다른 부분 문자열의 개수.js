var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
function solution(str) {
  let tmp = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      tmp.add(str.substring(i, j + 1));
    }
  }
  console.log(tmp.size);
}

solution(input);
