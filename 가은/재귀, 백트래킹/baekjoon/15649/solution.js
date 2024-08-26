// https://www.acmicpc.net/problem/15439
// 베라의 패션
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(Number(input) * (Number(input) - 1));
