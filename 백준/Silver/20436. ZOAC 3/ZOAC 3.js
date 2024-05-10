var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const left = input[0].split(" ")[0];
const right = input[0].split(" ")[1];
const words = input[1].split("");

const rights = "yuiophjklbnm";

const keyBoard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function isRight(x) {
  for (let i = 0; i < rights.length; i++) {
    if (x === rights[i]) return true;
  }
  return false;
}

function getIndex(x) {
  for (let i = 0; i < keyBoard.length; i++) {
    for (let j = 0; j < keyBoard[i].length; j++) {
      if (x === keyBoard[i][j]) return (x = [i, j]);
    }
  }
}

function solution(left, right, words) {
  left = getIndex(left);
  right = getIndex(right);
  let answer = 0;
  for (let x of words) {
    let position = isRight(x);
    x = getIndex(x);
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
