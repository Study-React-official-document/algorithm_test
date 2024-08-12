// https://www.acmicpc.net/problem/11653
// 소인수분해
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let arr = [];
let num = Number(input);
let n = 2;

while (num > 1) {
  if (num % n === 0) {
    arr.push(n);
    num = num / n;
  } else {
    n++;
  }
}

console.log(arr.join("\n"));

// 다른 사람 풀이
// 굳이 배열을 쓸 필요가 없었음

// if(n >= 2) {
//   var k = 2;
//   while(n > 1) {
//     if(n % k === 0) {
//       console.log(k);
//       n /= k;
//     }
//     else {
//       ++k;
//     }
//   }
// }
