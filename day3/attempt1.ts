const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letterMap = [...alphabet].reduce((acc, curr, index) => {
  acc[curr] = index + 1;
  return acc;
}, {});

export const runPart1 = (rucksacks) => {
  let half1:string[], half2: string[], half1obj, duplicateItems = [];

  //all rucksacks have an even number of items
  for (let rucksack of rucksacks) {
    half1obj = {};
    half2 = [...rucksack];
    half1 = half2.splice(0, half2.length/2)

    //createMap:
    for (const [key, value] of Object.entries(half1)) {
        half1obj[value] = key+1;
      }
    half2.every(item => {
        if (half1obj[item]){
            duplicateItems.push(item)
            return false
        }
        return true;
    })
  }
  console.log(duplicateItems)
  let counter = 0;
  for (let item of duplicateItems){
    counter+=letterMap[item]
  }

  console.log(counter)
};

const getIntersection = (rucksack1, rucksack2) => {
    const intersection = new Set(
      [...rucksack1].filter(element => rucksack2.has(element))
    );
  
    return intersection;
  }

export const runPart2 = (rucksacks) => {
    let mergedFirstTwo:Set<string>, final, counter=0;
    for (let i=0; i<rucksacks.length; i=i+3){
    // for (let i=0; i<3; i=i+3){
        mergedFirstTwo = getIntersection(new Set([...rucksacks[i]]), new Set([...rucksacks[i+1]]))
        // console.log(mergedFirstTwo)
        final = [...getIntersection(mergedFirstTwo, new Set([...rucksacks[i+2]]))][0]
        counter+=letterMap[final];
    }
    console.log(counter)

}