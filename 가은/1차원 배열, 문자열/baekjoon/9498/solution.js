// https://www.acmicpc.net/problem/9498
// 시험성적
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");
const num = parseInt(input);

if (num >= 90) {
  console.log("A");
} else if (num >= 80) {
  console.log("B");
} else if (num >= 70) {
  console.log("C");
} else if (num >= 60) {
  console.log("D");
} else {
  console.log("F");
}
