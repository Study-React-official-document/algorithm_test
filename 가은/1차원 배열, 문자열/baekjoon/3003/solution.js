// https://www.acmicpc.net/problem/3003
// 킹, 퀸, 룩, 비숍, 나이트, 폰
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const count = [1, 1, 2, 2, 2, 8];
let result = [];

for (let i = 0; i < input.length; i++) {
  result.push(count[i] - Number(input[i]));
}

console.log(result.join(" "));
