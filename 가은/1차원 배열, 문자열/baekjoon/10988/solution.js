// https://www.acmicpc.net/problem/10988
// 팰린드롬인지 확인하기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const mid = Math.floor(input.length / 2);
const front = input.slice(0, mid);
const back = input
  .slice(input.length % 2 !== 0 ? mid + 1 : mid, input.length)
  .split("")
  .reverse()
  .join("");

console.log(front === back ? 1 : 0);

// https://www.acmicpc.net/problem/10988
// 팰린드롬인지 확인하기
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim();
// const reverse = input.split("").reverse().join("");

// if (input === reverse) {
//   console.log(1);
// } else {
//   console.log(0);
// }
