// https://www.acmicpc.net/problem/10101
// 삼각형 외우기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (A == 60 && B == 60 && C == 60) {
  console.log("Equilateral");
} else if (A + B + C !== 180) {
  console.log("Error");
} else if (A + B + C === 180 && A != B && A != C && B != C) {
  console.log("Scalene");
} else {
  console.log("Isosceles");
}
