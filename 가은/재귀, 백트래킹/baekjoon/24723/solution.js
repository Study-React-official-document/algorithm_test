// https://www.acmicpc.net/problem/24723
// 녹색거탑
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(2 ** Number(input));
