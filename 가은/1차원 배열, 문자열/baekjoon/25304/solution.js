// https://www.acmicpc.net/problem/25304
// 영수증
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const result = Number(input[0]);
const count = Number(input[1]);

let sum = 0;
for (let i = 2; i < count + 2; i++) {
  const priceInfo = input[i].split(" ");
  sum += priceInfo[0] * priceInfo[1];
}

if (sum === result) {
  console.log("Yes");
} else {
  console.log("No");
}
