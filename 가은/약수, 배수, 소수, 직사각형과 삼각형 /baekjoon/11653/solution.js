// https://www.acmicpc.net/problem/11653
// 소인수분해
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

if (input === 1) return;

let i = 2;
let primes = [];

while (i < Math.floor(input) + 1) {
  if (input % i === 0) {
    input = input / i;
    primes.push(i);
  } else {
    i++;
  }
}

primes.forEach((num) => console.log(num));

// 시간 초과
// 약수를 먼저 구한다음에 약수를 나눈다...?
