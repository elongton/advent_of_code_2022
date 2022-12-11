//lazy attempt - wound up getting to complicated..

const fs = require("fs");
let filename = "puzzle_9_input.txt";
let content = fs.readFileSync(process.cwd() + "/day9/" + filename).toString();

const directions = content.split("\n").reduce((acc, curr) => {
  let broke = curr.split(" ");
  broke = [broke[0], Number(broke[1])];
  acc.push(broke);
  return acc;
}, []);

let example = [
    ["R", 4],
    ["U", 4],
    ["L", 3],
    ["D", 1],
    ["R", 4],
    ["D", 1],
    ["L", 5],
    ["R", 2],
  ];

//for direction instruction, do the following:
//1. iterate
//2. move the head in that direction
//3. check if tail is 2 steps away in the current direction
//3a. if so - move tail one step in that direction, if not, don't move tail

const isSeparated = (headc, tailc) => {
  if (Math.abs(headc - tailc) > 1) {
    return true;
  }
  return false;
};

const decideMove = (headc, tailc) => {
    if (headc < tailc){ 
        return tailc - 1
    }
    return tailc + 1
}

const move = (head, tail, direction, steps) => {
  let currHead = head[head.length - 1];
  let currTail = tail[tail.length - 1];
  for (let i = 0; i < steps; i++) {
    switch (direction) {
      case "L":
        currHead = [currHead[0] - 1, currHead[1]];
        if (isSeparated(currHead[0], currTail[0]) && isSeparated(currHead[1], currTail[1])){
            currTail = [
                currTail[0] - 1,
                decideMove(currHead[1], currTail[1]),
            ];
        }else if (isSeparated(currHead[0], currTail[0])){
            currTail = [currTail[0]-1, currTail[1]]
        }

        break;
      case "R":
        currHead = [currHead[0] + 1, currHead[1]];
        if (isSeparated(currHead[0], currTail[0]) && isSeparated(currHead[1], currTail[1])){
            currTail = [
                currTail[0] + 1,
                decideMove(currHead[1], currTail[1]),
            ];
        }else if (isSeparated(currHead[0], currTail[0])){
            currTail = [currTail[0]+1, currTail[1]]
        }
        break;
      case "D":
        currHead = [currHead[0], currHead[1] - 1];
        if (isSeparated(currHead[0], currTail[0]) && isSeparated(currHead[1], currTail[1])){
            currTail = [
                decideMove(currHead[0], currTail[0]),
                currTail[1] - 1,
            ];
        }else if (isSeparated(currHead[1], currTail[1])){
            currTail = [currTail[0], currTail[1]-1]
        }
        break;
      case "U":
        currHead = [currHead[0], currHead[1] + 1];
        if (isSeparated(currHead[0], currTail[0]) && isSeparated(currHead[1], currTail[1])){
            currTail = [
                decideMove(currHead[0], currTail[0]),
                currTail[1] + 1,
            ];
        }else if (isSeparated(currHead[1], currTail[1])){
            currTail = [currTail[0], currTail[1]+1]
        }
        break;
      default:
        break;
    }
    head.push(currHead);
    tail.push(currTail);
  }
};



const calcPart1 = (directions) => {
  let head = [[0, 0]];
  let tail = [[0, 0]];
  for (let instruction of directions) {
    move(head, tail, instruction[0], instruction[1]);
  }
  return new Set(tail);
};

// console.log(directions[directions.length-1])
console.log(calcPart1(directions).size);

export {};
