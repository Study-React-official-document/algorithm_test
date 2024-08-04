// https://www.acmicpc.net/problem/2566
// 최댓값
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.map((ele) => ele.split(" ").map(Number));

let max = arr[0][0];
let location = [0, 0];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max <= arr[i][j]) {
      max = arr[i][j];
      location[0] = i + 1;
      location[1] = j + 1;
    }
  }
}

console.log(max, ...location);

// const _max = [];
// input.map(row => {
//     _max.push(Math.max(...row));
// })

// const max = [Math.max(..._max)];
// max.push(_max.findIndex(item => item === max[0]) + 1);
// max.push(input[max[1] - 1].findIndex(item => item === max[0]) + 1)

// console.log(`${max[0]}\n${max[1]} ${max[2]}`)
