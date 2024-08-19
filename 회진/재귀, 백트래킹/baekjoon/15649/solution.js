// https://www.acmicpc.net/problem/15649
// N과 M (1)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = new Array(N).fill(false);
const result = [];

const dfs = (count) => {
  if (count === M) {
    console.log(result.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;

    visited[i] = true;
    result.push(i + 1);
    dfs(count + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0);

// 못 풀어서 다른 사람거 보고 풀었음
// 백트래킹 = dfs 어렵다..
// 방문했냐 안했냐로 풀어야한다는것을 깨달음

// string으로 한번에 뽑는 방법
// const solve = (depth) => {
//   if (depth === M) {
//     output += save.join(" ");
//     output += "\n";
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     if (!isChecked[i]) {
//       isChecked[i] = true;
//       save[depth] = i;
//       solve(depth + 1);
//       isChecked[i] = false;
//     }
//   }
// };

// const isChecked = new Array(N + 1).fill(false);
// const save = new Array(M).fill(0);
// let output = "";

// solve(0);

// console.log(output);
