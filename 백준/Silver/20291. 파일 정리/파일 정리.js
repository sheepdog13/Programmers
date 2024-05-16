var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

function solution(files) {
  files = files.map((v) => v.substring(v.indexOf(".") + 1));
  let fH = new Map();

  for (let file of files) {
    if (fH.get(file)) {
      fH.set(file, fH.get(file) + 1);
    } else {
      fH.set(file, 1);
    }
  }
  let fileList = [...fH].sort();
  let result = [];
  for (let x of fileList) {
    result.push(x.join(" "));
  }
  console.log(result.join("\n"));
}

solution(input);
