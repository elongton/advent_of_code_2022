import { runPart1, runPart2 } from "./attempt1";
const fs = require("fs");
let filename = "puzzle_3_input.txt";
let content = fs.readFileSync(process.cwd() + "/day3/" + filename).toString();

const rucksacks = content.split('\n');

// runPart1(rucksacks);
runPart2(rucksacks);