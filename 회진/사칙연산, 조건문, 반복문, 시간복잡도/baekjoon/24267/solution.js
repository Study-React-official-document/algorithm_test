// https://www.acmicpc.net/problem/24267
// 알고리즘 수업 - 알고리즘의 수행 시간 6
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

let count = 0;

const MenOfPassion = (arr, n) => {
  let sum = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; i < n - 1; j++) {
      for (let k = j + 1; i < n; k++) {
        sum = arr[i] * arr[j] * arr[k];
        count++;
      }
    }
  }

  return sum;
};

MenOfPassion([], Number(input));

console.log(count);

// 문제가 이해가 안됨
// https://medium.com/@koreanraichu/%EB%B0%B1%EC%A4%80-24267%EB%B2%88-%ED%92%80%EC%9D%B4-845aad25dac
