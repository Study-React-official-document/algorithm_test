// https://www.acmicpc.net/problem/2566
// 최댓값
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let maxNum = 0;
let row = 0;
let column = 0;

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map(Number);
  const max = Math.max(...arr);
  if (max > maxNum) {
    maxNum = max;
    row = i;
    column = arr.indexOf(max);
  }
}

console.log(maxNum);
console.log(`${row + 1} ${column + 1}`);
