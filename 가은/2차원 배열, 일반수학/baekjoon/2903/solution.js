// https://www.acmicpc.net/problem/2903
// 중앙 이동 알고리즘
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);
let first = 2;

// 1 2(+2의 0승 = 1)** 2 9 // 2는 기존의 기본 값
// 2 3(+2의 1승 = 2)** 2 25 // 3은 이전의 2(+2의 0승 = 1) 값
// 3 5(+2의 2승 = 4)** 2 81 // 5는 이전의 3(+2의 1승 = 2) 값
// 4 9(+2의 3승 = 8)** 2 5184
// 5 17(+2의 5승 = 16)**2 1089

for (let i = 0; i < num; i++) {
  const plus = 2 ** i;
  const prev = first + plus;
  first = prev;
}
console.log(first ** 2);
