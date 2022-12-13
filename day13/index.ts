import { runPart1, runPart2 } from "./attempt1";
const fs = require("fs");
let filename = "puzzle_13_input.txt";
let content = fs.readFileSync(process.cwd() + "/day13/" + filename).toString();

let parsed = content.split('\n');

runPart1(parsed);