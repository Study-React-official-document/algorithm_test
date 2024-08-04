// https://www.acmicpc.net/problem/2563
// 색종이
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const length = Number(input[0]);
let count = 0;

let array = new Array(100).fill(null).map(() => new Array(100).fill(null));

for (let i = 1; i < length + 1; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);
  fillArray(num1, num2);
}

function fillArray(num1, num2) {
  for (let i = num1; i < num1 + 10; i++) {
    for (let j = num2; j < num2 + 10; j++) {
      array[i][j] = 1;
    }
  }
}

array.forEach((item) => {
  item.forEach((e) => {
    if (e === 1) count++;
  });
});

console.log(count);
