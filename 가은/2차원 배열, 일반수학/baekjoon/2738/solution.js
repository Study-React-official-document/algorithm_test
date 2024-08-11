// https://www.acmicpc.net/problem/2738
// 행렬 덧셈
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(" ").map(Number));

const [N, M] = input[0];

const result = new Array(N).fill().map(() => new Array(M).fill(0));

const A = input.slice(1, N + 1);
const B = input.slice(N + 1, input.length);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i][j] += A[i][j] + B[i][j];
  }
}

console.log(result.map((item) => item.join(" ")).join("\n"));
