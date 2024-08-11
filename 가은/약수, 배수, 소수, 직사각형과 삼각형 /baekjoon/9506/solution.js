// https://www.acmicpc.net/problem/9506
// 약수들의 합
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let num = input[i];
  let divisor = [1];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }
  const sum = divisor.reduce((acc, curr) => acc + curr, 0);
  if (sum === num) {
    console.log(`${num} = ${divisor.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}

// 제곱근 범위까지만 반복
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// input.pop();  // 맨 끝 -1 제거

// console.log(input.map(function solution(num) {
//   const divisor = [1];  // 약수에 항상 1이 있으므로

//   for (let i=2; i <= Math.sqrt(num); i++) {   // 제곱근 범위
//     if (num % i === 0) {
//       divisor.push(i);        // 약수 i
//       divisor.push(num / i);  // i와 곱했을때 num이 되는 약수
//     }
//   }
//   if (divisor.reduce((acc, cur) => acc + cur, 0) === num) {  // 완전수
//     return `${num} = ` + divisor.sort((a,b) => a - b).join(' + ');
//   } else {
//     return `${num} is NOT perfect.`;
//   }
// }).join('\n'));
