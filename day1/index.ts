const fs = require('fs')
let filename = "puzzle_1_input.txt"
let content = fs.readFileSync(process.cwd() + "/day1/" + filename).toString()

const calorieArray = content.split('\n\n');
const convertedCalorieArray = calorieArray.map((r:string) => {
    let elfFood:any = r.split('\n')
    return elfFood.map(Number)
})

const summarillion = (arr:number[]) => {
 return arr.reduce((acc:number, curr:number)=> {
    acc += curr;
    return acc
 }, 0)
}

const summedCalorieArray = convertedCalorieArray.map((r:any)=> summarillion(r))
const topElf = Math.max(...summedCalorieArray);

/////second part top three elves:

summedCalorieArray.sort((a:number,b:number)=> (b-a));
const sumOfTopThree = summarillion(summedCalorieArray.slice(0,3))
console.log(sumOfTopThree)