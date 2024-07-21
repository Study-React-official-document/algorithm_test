// https://www.acmicpc.net/problem/24267
// 알고리즘 수업 - 알고리즘의 수행 시간 6
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

console.log(input);
