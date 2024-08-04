// https://www.acmicpc.net/problem/2563
// 색종이

// 내 틀린 풀이
// -> 이렇게 풀면 여러번 겹치는 경우를 확인해야해서 까다롭고, for문을 너무 많이 돌아야해서 좀 별로인 코드
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");
// const N = input[0];
// const paper = input.slice(1).map((ele) => ele.split(" ").map(Number));

// let result = 100 * N;

// for (let i = 0; i < N; i++) {
//   const [x, y] = paper[i];
//   for (let j = i + 1; j < N; j++) {
//     const [a, b] = paper[j];

//     if (Math.abs(x - a) < 10 && Math.abs(y - b) < 10) {
//       if (result > 100) {
//         result -= Math.abs(x + 10 - a) * Math.abs(b + 10 - y);
//       }
//     }
//   }
// }

// console.log(result);

// 다른 사람 풀이
const filePath = `linux` === process.platform ? `dev/stdin` : "input.txt";
const lines = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(`\n`);

let drawingPaper = Array.from(Array(100), () => Array(100).fill(0)); // 100*100 배열 생성
const confetti = lines.slice(1).map((line) => line.split(` `).map(Number)); // 예시 배열
let size = 0;

if (Number(lines[0]) !== confetti.length) return;

confetti.forEach((line) => {
  const [x, y] = line;

  for (let i = x; i < x + 10; i++) {
    // 색종이의 가로 길이만큼
    for (let j = y; j < y + 10; j++) {
      // 색종이의 세로 길이만큼 순회
      if (1 === drawingPaper[i][j]) continue; // 만약 값이 1이라면 사이즈 1 올려줌
      drawingPaper[i][j] = 1;
      size++;
    }
  }
});

console.log(size);
