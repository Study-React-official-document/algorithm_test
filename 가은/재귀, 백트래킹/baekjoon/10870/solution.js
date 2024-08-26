// https://www.acmicpc.net/problem/10870
// 피보나치 수 5
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function fibo(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibo(num - 2) + fibo(num - 1);
}

console.log(fibo(Number(input)));
