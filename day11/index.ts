const fs = require("fs");
let filename = "puzzle_11_input.txt";
let content = fs.readFileSync(process.cwd() + "/day11/" + filename).toString();

let parse1 = content.split("\n");



import { runPart1, runPart2 } from "./attempt1";
import { monkeyArray } from "./data";

// runPart1(monkeyArray);
runPart2(monkeyArray);

// const multipleArrayNumber = (numberArray, multiplier) => {
//   numberArray.reverse();
//   let product = [];
//   let current;
//   numberArray.forEach(digit => {
//     current = digit*multiplier;
//     current = String(current).split('');
//   })
// }
