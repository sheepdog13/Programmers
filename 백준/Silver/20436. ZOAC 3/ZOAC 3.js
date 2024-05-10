var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const left = input[0].split(" ")[0];
const right = input[0].split(" ")[1];
const words = input[1].split("");

const leftBoard = [
  ["q", "w", "e", "r", "t"],
  ["a", "s", "d", "f", "g"],
  ["z", "x", "c", "v"],
];
const rightBoard = [
  ["", "y", "u", "i", "o", "p"],
  ["", "h", "j", "k", "l"],
  ["b", "n", "m"],
];

function isRight(x) {
  for (let i = 0; i < rightBoard.length; i++) {
    for (let j = 0; j < rightBoard[i].length; j++) {
      if (x === rightBoard[i][j]) return true;
    }
  }
  return false;
}

function getIndex(x, isRight) {
  if (isRight) {
    for (let i = 0; i < rightBoard.length; i++) {
      for (let j = 0; j < rightBoard[i].length; j++) {
        if (x === rightBoard[i][j]) return (x = [i, j]);
      }
    }
  } else {
    for (let i = 0; i < leftBoard.length; i++) {
      for (let j = 0; j < leftBoard[i].length; j++) {
        if (x === leftBoard[i][j]) return (x = [i, j]);
      }
    }
  }
}

function solution(left, right, words) {
  left = getIndex(left, false);
  right = getIndex(right, true);
  let answer = 0;
  for (let x of words) {
    let position = isRight(x);
    x = getIndex(x, position);
    if (position) {
      // 오른쪽
      answer += Math.abs(right[0] - x[0]) + Math.abs(right[1] - x[1]);
      answer++;
      right = x;
    } else {
      answer += Math.abs(left[0] - x[0]) + Math.abs(left[1] - x[1]);
      answer++;
      left = x;
    }
  }
  return answer;
}

console.log(solution(left, right, words));
