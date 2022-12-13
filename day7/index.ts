import { runPart1, runPart2 } from "./attempt1";
const fs = require("fs");
let filename = "puzzle_7_input.txt";
let content = fs.readFileSync(process.cwd() + "/day7/" + filename).toString();

let parsed = content.split('\n');

runPart1(parsed);