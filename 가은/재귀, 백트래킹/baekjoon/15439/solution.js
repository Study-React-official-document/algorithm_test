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

function backtrack(N, M) {
  const sequence = [];

  function generate(start) {
    if (sequence.length === M) {
      console.log(sequence.join(" "));
      return;
    }

    for (let i = start; i <= N; i++) {
      sequence.push(i);
      generate(i + 1);
      sequence.pop();
    }
  }

  generate(1);
}

backtrack(A, B);
