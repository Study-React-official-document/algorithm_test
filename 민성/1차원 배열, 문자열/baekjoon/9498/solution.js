// https://www.acmicpc.net/problem/9498
// 시험성적
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

console.log(input);
