var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath);

function solution(n) {
  const length = 4 * (n - 1) + 1;
  let board = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < length; j++) {
      row.push("*");
    }
    board.push(row);
  }
  const mid = Math.floor(length / 2);
  for (let i = 0; i < length; i++) {
    if (i % 2 === 1) {
      board[mid][i] = " ";
    }
  }
  const cnt = 2 * (n - 1) - 1;
  let lt = mid - 1;
  let rt = mid + 1;
  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < length; j++) {
      if ((mid - lt) % 2 === 1) {
        if (j <= mid + i && j >= mid - i) {
          board[lt][j] = " ";
          board[rt][j] = " ";
          continue;
        }
        if (j % 2 === 1) {
          board[lt][j] = " ";
          board[rt][j] = " ";
        }
      } else {
        if (j > mid + i && j % 2 === 1) {
          board[lt][j] = " ";
          board[rt][j] = " ";
        } else if (j < mid - i && j % 2 === 1) {
          board[lt][j] = " ";
          board[rt][j] = " ";
        }
      }
    }
    lt--;
    rt++;
  }

  board.map((line) => console.log(line.join("")));
}

solution(input);
