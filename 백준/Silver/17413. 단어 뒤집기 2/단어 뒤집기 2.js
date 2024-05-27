var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(s) {
  let stack = [];
  let word = [];
  let words = [];
  for (let x of s) {
    if (stack.length) {
      // 괄호안일때
      stack.push(x);
      if (x === ">") {
        words.push(stack.join(""));
        stack = [];
      }
    } else {
      if (x === "<") {
        stack.push(x);
        if (word.length) {
          words.push(word.join(""));
          word = [];
        }
      } else {
        word.push(x);
      }
    }
  }
  if (word.length) {
    words.push(word.join(""));
  }

  let result = "";

  for (let x of words) {
    if (x[0] === "<") {
      result += x;
    } else {
      result += x
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
    }
  }
  console.log(result);
}

solution(input);
