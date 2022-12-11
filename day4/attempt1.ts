import { Pair } from ".";

const createRange = (start, end) => {
    return [...Array(end - start + 1).keys()].map(x => x + start);
}

export const runPart1 = (data: Pair[]) => {
    let counter = 0, elf1Range, elf2Range, maxLength, currentSet;
    for (let pair of data){
        elf1Range = createRange(...pair.e1);
        elf2Range = createRange(...pair.e2);
        // console.log("e1: ", elf1Range)
        // console.log("e2: ", elf2Range)
        maxLength = Math.max(elf1Range.length, elf2Range.length)
        currentSet = new Set([...elf1Range, ...elf2Range]);
        if (currentSet.size === maxLength){
            counter++
        }
    }
    console.log(counter)
}
export const runPart2 = (data: Pair[]) => {
    let counter = 0, elf1Range, elf2Range, maxLength, currentSet;
    for (let pair of data){
        elf1Range = createRange(...pair.e1);
        elf2Range = createRange(...pair.e2);
        // console.log("e1: ", elf1Range)
        // console.log("e2: ", elf2Range)
        // maxLength = Math.max(elf1Range.length, elf2Range.length)
        currentSet = new Set([...elf1Range, ...elf2Range]);
        if (currentSet.size < (elf1Range.length+elf2Range.length)){
            counter++
        }
    }
    console.log(counter)
}