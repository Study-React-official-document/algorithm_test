// https://www.acmicpc.net/problem/18108
// 1998년생인 내가 태국에서는 2541년생?!
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();
console.log(Number(input) - 543);
