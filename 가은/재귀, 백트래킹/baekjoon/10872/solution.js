// https://www.acmicpc.net/problem/10872
// 팩토리얼
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(Number(input)));
