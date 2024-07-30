// https://www.acmicpc.net/problem/1316
// 그룹 단어 체커2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

let prev = [];
let result = 0;

for (let i = 1; i <= N; i++) {
  let string = input[i];

  for (let j = 0; j < string.length; j++) {
    if (prev.includes(string[j])) {
      if (prev[prev.length - 1] === string[j]) {
        prev.push(string[j]);
        string.slice(1);
      } else {
        string = "";
        prev.push(false);
      }
    } else {
      prev.push(string[j]);
      string.slice(1);
    }
  }

  !prev.includes(false) && result++;

  prev = [];
}

console.log(result);

// 다른 사람 방법  -1을 해버리네

// const N = input[0];
// var answer = N;

// for(let i =0; i < N; i++){
//     const word = input[i+1];
//     let save = [];
//     for(let j =0; j < word.length -1; j++){
//         save = word[j];
//         if(word[j] != word[j+1] && word.slice(j+1).includes(word[j])){
//             answer--;
//             break;
//         }

//     }
// }

// console.log(answer);
