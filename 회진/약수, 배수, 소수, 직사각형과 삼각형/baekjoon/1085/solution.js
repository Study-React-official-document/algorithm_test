// https://www.acmicpc.net/problem/1085
// 직사각형에서 탈출
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [x, y, w, h] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(x - 0, w - x, y - 0, h - y));
