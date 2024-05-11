var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const k = +input[1];

function solution(n, k) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    answer.push(row);
  }
  const mid = Math.floor(n / 2);
  answer[mid][mid] = 1;
  let cnt = 1;
  let [x, y] = [mid, mid];
  for (let i = 1; i < mid + 1; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 0) x += -1;
      if (j === 1) x += 1;
      if (j === 2) y += -1;
      if (j === 3) x += -1;
      answer[x][y] = ++cnt;
      for (let s = 1; s < i * 2; s++) {
        if (j === 0) y += 1;
        if (j === 1) x += 1;
        if (j === 2) y += -1;
        if (j === 3) x += -1;
        answer[x][y] = ++cnt;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (k === answer[i][j]) {
        answer.push([i + 1, j + 1]);
        break;
      }
    }
  }
  answer = answer.map((v) => v.join(" ")).join("\n");
  console.log(answer);
}

solution(n, k);
