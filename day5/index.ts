//                     [L]     [H] [W]
//                 [J] [Z] [J] [Q] [Q]
// [S]             [M] [C] [T] [F] [B]
// [P]     [H]     [B] [D] [G] [B] [P]
// [W]     [L] [D] [D] [J] [W] [T] [C]
// [N] [T] [R] [T] [T] [T] [M] [M] [G]
// [J] [S] [Q] [S] [Z] [W] [P] [G] [D]
// [Z] [G] [V] [V] [Q] [M] [L] [N] [R]

import { runPart1, runPart2 } from "./attempt1";

//  1   2   3   4   5   6   7   8   9 
const stacks = [
    'ZJNWPS',
    'GST',
    'VQRLH',
    'VSTD',
    'QZTDBMJ',
    'MWTJDCZL',
    'LPMWGTJ',
    'NGMTBFQH',
    'RDGCPBQW',
]

const fs = require("fs");
let filename = "puzzle_5_input.txt";
let content = fs.readFileSync(process.cwd() + "/day5/" + filename).toString();

export type Instruction = {move:number, from:number, to:number};
let instructions = <Instruction[]>content.split('\n')
.map(i => {
    return {
        move: Number(i.match(/(?<=move )(.*)(?= from)/)[0]),
        from: Number(i.match(/(?<=from )(.*)(?= to)/)[0]),
        to: Number(i.match(/(?<=to )(.*)/)[0]),
    }
});

// runPart1(stacks, instructions)
runPart2(stacks, instructions)
