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
  let sortWords = [];
  for (let x of words) {
    if (x[0] === "<") {
      sortWords.push(x);
    } else {
      sortWords.push(x.split(" "));
    }
  }
  let result = "";
  for (let x of sortWords) {
    if (x[0] === "<") {
      result += x;
    } else {
      let a = [];
      while (x.length) {
        a.push(x.shift().split("").reverse().join(""));
      }
      result += a.join(" ");
    }
  }
  console.log(result);
}

solution(input);
