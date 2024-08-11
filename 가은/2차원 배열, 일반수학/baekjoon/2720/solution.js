// https://www.acmicpc.net/problem/2720
// 세탁소 사장 동혁
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const LOOP = input[0];

for (let i = 1; i < LOOP + 1; i++) {
  let coins = [0, 0, 0, 0];
  let price = input[i];
  while (price > 0) {
    if (Math.floor(price / 25) > 0) {
      coins[0] += Math.floor(price / 25);
      price = price % 25;
    } else if (Math.floor(price / 10) > 0) {
      coins[1] += Math.floor(price / 10);
      price = price % 10;
    } else if (Math.floor(price / 5) > 0) {
      coins[2] += Math.floor(price / 5);
      price = price % 5;
    } else {
      coins[3] += Math.floor(price / 1);
      price = price % 1;
    }
  }
  console.log(coins.join(" "));
}
