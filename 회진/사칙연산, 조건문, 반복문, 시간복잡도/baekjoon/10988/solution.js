// https://www.acmicpc.net/problem/10988
// 팰린드롬인지 확인하기
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = true;

for (let i = 0; i < input.length; i++) {
  if (input.length === 1) {
    result = true;
    break;
  }

  if (i === input.length - 1 - i) {
    break;
  }

  if (input[i] === input[input.length - 1 - i]) {
    continue;
  } else {
    result = false;
    break;
  }
}

console.log(result ? 1 : 0);

// fs 모듈이 이상하게 반응해서 오래걸렸다.

// 다른 사람 풀이
// console.log(input === input.split("").reverse().join("") ? 1 : 0);
