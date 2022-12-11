const fs = require("fs");
let filename = "puzzle_6_input.txt";
// let filename = "puzzle_6_sample.txt";
let content = fs.readFileSync(process.cwd() + "/day6/" + filename).toString();
import { runPart1, runPart2 } from "./attempt1";

let parsedCharacterArray = content.split('');

// runPart1(parsedCharacterArray);
runPart2(parsedCharacterArray);