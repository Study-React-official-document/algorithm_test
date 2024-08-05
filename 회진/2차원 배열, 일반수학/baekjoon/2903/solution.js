// https://www.acmicpc.net/problem/2903
// 중앙 이동 알고리즘
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let num = 2;

for (let i = 0; i < input; i++) {
  num += 2 ** i;
}

console.log(num ** 2);

// 다른 사람 풀이
// console.log(Math.pow((Math.pow(2, parseInt(input)) + 1), 2));
