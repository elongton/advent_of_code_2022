const fs = require("fs");
let filename = "puzzle_10_input.txt";
// let filename = "puzzle10_sample.txt";
// let filename = "puzzle10_simple.txt";
let content = fs.readFileSync(process.cwd() + "/day10/" + filename).toString();
import { runPart1, runPart2 } from "./attempt1";

export type Instruction = {operation: string, value: number}

const instructions = content.split("\n").reduce((acc, curr) => {
    let broke = curr.split(" ");
    if (broke.length > 1){
        acc.push({operation: broke[0], value: Number(broke[1])})
    }else{
        acc.push({operation: broke[0], value: null})
    }
    return acc;
  }, []);


// let values = runPart1(instructions);

// console.log(
// values[20-1]*20+
// values[60-1]*60+
// values[100-1]*100+
// values[140-1]*140+
// values[180-1]*180+
// values[220-1]*220
// )

runPart2(instructions)


