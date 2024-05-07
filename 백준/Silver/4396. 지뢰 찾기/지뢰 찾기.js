var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const m = input.filter((v, i) => i >= n).map((v) => v.split(""));

input = input.filter((v, i) => i < n).map((v) => v.split(""));

function check(i, j, board) {
  let dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  let dy = [-1, -1, -1, 0, 0, 1, 1, 1];
  let cnt = 0;
  for (let k = 0; k < 9; k++) {
    let x = i + dx[k];
    let y = j + dy[k];
    if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === "*") cnt++;
  }
  return cnt;
}

function solution(n, board, checkBoard) {
  let isTrap = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (checkBoard[i][j] === "x" && board[i][j] === "*") {
        isTrap = true;
        break;
      }
    }
  }
  if (isTrap) {
    // 함정 밟음
    for (let i = 0; i < n; i++) {
      let answer = "";
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "*") answer += board[i][j];
        else {
          if (checkBoard[i][j] === "x") answer += check(i, j, board);
          else {
            answer += ".";
          }
        }
      }
      console.log(answer);
    }
  } else {
    // 안밟음
    for (let i = 0; i < n; i++) {
      let answer = "";
      for (let j = 0; j < n; j++) {
        if (checkBoard[i][j] === "x") answer += check(i, j, board);
        else answer += ".";
      }
      console.log(answer);
    }
  }
}

solution(n, input, m);
