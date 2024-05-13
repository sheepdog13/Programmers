var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

function solution(sound) {
  if (sound.length % 5 !== 0) return -1;
  let answer = 0;
  let quack = ["q", "u", "a", "c", "k"];
  let ducks = [[]];
  for (let x of sound) {
    let flag = false;
    for (let j = 0; j < ducks.length; j++) {
      if (quack[ducks[j].length % 5] === x) {
        ducks[j].push(x);
        flag = true;
        break;
      }
    }
    if (!flag) ducks.push([x]);
  }
  for (let duck of ducks) {
    if (duck.length % 5 !== 0) return -1;
    else answer++;
  }
  return answer;
}

console.log(solution(input));
