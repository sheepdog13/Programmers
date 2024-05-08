var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const state = input[0].split(" ").map(Number);
const studentNum = +input[1];
const studentList = input
  .filter((v, i) => i > 1)
  .map((v) => v.split(" ").map(Number));

function toggle(state) {
  return state === 0 ? 1 : 0;
}

function solution(n, state, studentNum, studentList) {
  for (let i = 0; i < studentNum; i++) {
    let student = studentList[i];
    let stuNum = student[1];
    // 남학생일때
    if (student[0] === 1) {
      if (stuNum > n) continue;
      for (let i = 0; i < parseInt(n / stuNum); i++) {
        let target = (i + 1) * stuNum - 1;
        state[target] = toggle(state[target]);
      }
    } else {
      if (stuNum > n) continue;
      let flag = 0;
      state[stuNum - 1] = toggle(state[stuNum - 1]);
      let rt = stuNum;
      let lt = stuNum - 2;

      while (flag === 0 && lt >= 0 && rt <= n) {
        if (state[rt] === state[lt]) {
          state[rt] = toggle(state[rt]);
          state[lt] = toggle(state[lt]);
          rt++;
          lt--;
        } else flag = 1;
      }
    }
  }
  let anwser = "";
  state.forEach((v, i) => {
    anwser += v + " ";
    if ((i + 1) % 20 === 0) {
      anwser += "\n";
    }
  });
  console.log(anwser.trim());
}

solution(n, state, studentNum, studentList);
