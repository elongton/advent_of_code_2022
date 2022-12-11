const fs = require("fs");
let filename = "puzzle_9_input.txt";
let content = fs.readFileSync(process.cwd() + "/day9/" + filename).toString();
import { runPart1, runPart2 } from "./attempt2";

export type Coordinate = [number, number];
export type Direction = "U" | "D" | "L" | "R";
export type Instruction = [Direction, number];

const directions = content.split("\n").reduce((acc, curr) => {
  let broke = curr.split(" ");
  broke = [broke[0], Number(broke[1])];
  acc.push(broke);
  return acc;
}, []);

let example = <Instruction[]>[
  ["R", 4],
  ["U", 4],
  ["L", 3],
  ["D", 1],
  ["R", 4],
  ["D", 1],
  ["L", 5],
  ["R", 2],
];

let example2 = <Instruction[]>[
  ["R", 5],
  ["U", 8],
  ["L", 8],
  ["D", 3],
  ["R", 17],
  ["D", 10],
  ["L", 25],
  ["U", 20],
];

console.log(runPart2(directions).size);
//  console.log(runPart1(directions).size);

// export * from './attempt1'
