// https://www.acmicpc.net/problem/15649
// N과 M (1)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function backNM(N, M) {
    if ()
    // N까지의 자연수중에 M개를 고른다
    if ()

}

console.log(backNM(A, B));
