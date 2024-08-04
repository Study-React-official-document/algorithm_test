// https://www.acmicpc.net/problem/3003
// 킹, 퀸, 룩, 비숍, 나이트, 폰
const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

console.log(
  1 - input[0],
  1 - input[1],
  2 - input[2],
  2 - input[3],
  2 - input[4],
  8 - input[5]
);

// 너무 무식하게 푼듯

// const correctNumber = [1, 1, 2, 2, 2, 8];
// console.log(correctNumber.map((item, idx) => item - found[idx]).join(' '));
