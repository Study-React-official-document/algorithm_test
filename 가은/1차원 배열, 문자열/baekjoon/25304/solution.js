// https://www.acmicpc.net/problem/25304
// 영수증
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

console.log(input);
