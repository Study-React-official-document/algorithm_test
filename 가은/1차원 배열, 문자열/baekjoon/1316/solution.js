// https://www.acmicpc.net/problem/1316
// 그룹 단어 체커
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const length = Number(input[0]);
let result = 0;

for (let i = 1; i < length + 1; i++) {
  let state = true;
  let checkArr = [];

  for (let j = 0; j < input[i].length; j++) {
    if (checkArr.length === 0) {
      // 처음에 일단 넣음
      checkArr.push(input[i][j]);
    } else if (checkArr[checkArr.length - 1] !== input[i][j]) {
      // 마지막 글자와 다르면 넣기, 대신 그 안에 있는 글자인지 확인
      if (checkArr.includes(input[i][j])) {
        state = false;
        break;
      } else {
        checkArr.push(input[i][j]);
      }
    }
  }
  if (state) result += 1;
}

console.log(result);
