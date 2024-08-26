// https://www.acmicpc.net/problem/14215
// 세 막대
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if ((A === B) === C) console.log(A * 3);
else if (A > B + C - 1) console.log(B * 2 + C * 2 - 1);
else console.log(B + C + A);
