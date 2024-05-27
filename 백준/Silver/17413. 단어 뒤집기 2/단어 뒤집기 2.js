var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function reverseString(word) {
  return word.split("").reverse().join("");
}

function solution(s) {
  let stack = [];
  let word = [];
  let words = [];
  for (let x of s) {
    if (stack.length) {
      // 괄호 안일 때
      stack.push(x);
      if (x === ">") {
        words.push(stack.join(""));
        stack = [];
      }
    } else {
      // 괄호 밖일 때
      if (x === "<") {
        stack.push(x);
        // 앞에서 단어를 저장 했을 경우
        if (word.length) {
          words.push(word.join(""));
          word = [];
        }
      } else {
        word.push(x);
      }
    }
  }

  // ">"이 마지막이 아닐경우 남아있는 단어 push
  if (word.length) {
    words.push(word.join(""));
  }

  let result = "";

  for (let x of words) {
    // 괄호일 경우 그대로 저장
    if (x[0] === "<") {
      result += x;
    } else {
      // 괄호가 아닐 때 단어를 쪼갠 뒤 뒤집어서 단어 사이 뛰어서 저장
      result += x
        .split(" ")
        .map((word) => reverseString(word))
        .join(" ");
    }
  }
  console.log(result);
}

solution(input);
