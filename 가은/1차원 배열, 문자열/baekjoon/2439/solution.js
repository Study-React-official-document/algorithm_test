// https://www.acmicpc.net/problem/9498
// 시험성적
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const num = Number(input);

for (let i = 1; i < num + 1; i++) {
  const blank = num - i;
  let result = "";
  for (let j = 0; j < blank; j++) {
    result += " ";
  }
  for (let k = 0; k < i; k++) {
    result += "*";
  }
  console.log(result);
}
