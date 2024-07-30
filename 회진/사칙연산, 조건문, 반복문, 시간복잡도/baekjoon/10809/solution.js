// https://www.acmicpc.net/problem/10809
// 알파벳 찾기
const { getCipherInfo } = require("crypto");
const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const exam = {
  a: -1,
  b: -1,
  c: -1,
  d: -1,
  e: -1,
  f: -1,
  g: -1,
  h: -1,
  i: -1,
  j: -1,
  k: -1,
  l: -1,
  m: -1,
  n: -1,
  o: -1,
  p: -1,
  q: -1,
  r: -1,
  s: -1,
  t: -1,
  u: -1,
  v: -1,
  w: -1,
  x: -1,
  y: -1,
  z: -1,
};

for (let i = 0; i < input.length; i++) {
  if (exam[input[i]] === -1) {
    exam[input[i]] = i;
  }
}

const result = Object.values(exam).join(" ");
console.log(result);

// 다른 사람 코드 // fromCharCode 코드 활용 // 에...?
// let arr = [];
// for(let i = 97; i<= 122; i++){
//     arr.push(input.indexOf(String.fromCharCode(i)));
// }
// console.log(arr.join(' '));

// indexOf 활용 // 오..
// const arr = [
//   input.indexOf("a"),
//   input.indexOf("b"),
//   input.indexOf("c"),
//   input.indexOf("d"),
//   input.indexOf("e"),
//   input.indexOf("f"),
//   input.indexOf("g"),
//   input.indexOf("h"),
//   input.indexOf("i"),
//   input.indexOf("j"),
//   input.indexOf("k"),
//   input.indexOf("l"),
//   input.indexOf("m"),
//   input.indexOf("n"),
//   input.indexOf("o"),
//   input.indexOf("p"),
//   input.indexOf("q"),
//   input.indexOf("r"),
//   input.indexOf("s"),
//   input.indexOf("t"),
//   input.indexOf("u"),
//   input.indexOf("v"),
//   input.indexOf("w"),
//   input.indexOf("x"),
//   input.indexOf("y"),
//   input.indexOf("z"),
// ];

// console.log(arr.join(" "));
