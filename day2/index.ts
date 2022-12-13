import { runPart1, runPart2 } from "./attempt1";
const fs = require("fs");
let filename = "puzzle_2_input.txt";
let content = fs.readFileSync(process.cwd() + "/day2/" + filename).toString();



let rockPaperScissors = content.split('\n').map(g => g.replace(' ',''))
// console.log(rockPaperScissors)

// runPart1(rockPaperScissors)
runPart2(rockPaperScissors)