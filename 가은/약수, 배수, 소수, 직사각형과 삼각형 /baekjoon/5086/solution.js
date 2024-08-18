// https://www.acmicpc.net/problem/5086
// 배수와 약수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const arr = input.map((str) => str.split(" ").map(Number));

// 첫번째 숫자가 두번째 숫자의 약수라면 factor
// 첫번째 숫자가 두번째 숫자의 배수라면 multiple
// 둘 다 아니면 neither

arr.forEach((item) => {
  const [A, B] = item;
  if (A % B === 0) {
    console.log("multiple");
  } else if (B % A === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
});
