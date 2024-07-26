// https://www.acmicpc.net/problem/10998
// A×B
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs.readFileSync(filePath).toString().split(" ");
console.log(Number(A) * Number(B));
