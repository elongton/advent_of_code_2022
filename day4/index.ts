import { runPart1, runPart2 } from "./attempt1";

const fs = require("fs");
// let filename = "puzzle_4_input.txt";
let filename = "puzzle_4_sample.txt";
let content = fs.readFileSync(process.cwd() + "/day4/" + filename).toString();

export type Pair = {e1: [number, number], e2: [number, number]}


let parsedCharacterArray = <Pair[]>content.split('\n')
.map(pair => pair.split(',').map(range => range.split('-').map(Number)))
.map(pair =>( {e1: pair[0], e2: pair[1]}));

// runPart1(parsedCharacterArray)
runPart2(parsedCharacterArray)