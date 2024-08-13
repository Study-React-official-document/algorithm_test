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

// if (A === B && B === C) {
//   console.log(A * 3);
// } else {
//   B + C <= A ? console.log(2 * B + 2 * C - 1) : console.log(A + B + C);
// }

// 굳이 위 처럼 풀 필요가 없었음 더 간단해질 수 있었다

B + C <= A ? console.log(2 * B + 2 * C - 1) : console.log(A + B + C);
