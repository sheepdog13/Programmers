var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b)
