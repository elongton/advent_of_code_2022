//Consider your map; how many trees are visible from outside the grid?

//need to construct arrays in each direction: 
//from west,east (arrays reverse of each other)
//from north, south

//since we're figuring out how many trees are visible from outside,
//we iterate over each array and increment all trees that are greater than max of all subsequent trees

const fs = require('fs')
let filename = "puzzle_8_input.txt"
let content = fs.readFileSync(process.cwd() + "/day8/" + filename).toString()


// define transpose
const  transpose = (matrix) => {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

//convert content to aoa:
//the following first splits the blob by carriage return, 
//then splits each item into an array of strings, which is then mapped to numbers
const grid = content.split('\n').map(row => row.split('').map(Number))

//now define a function that calculates the total number of trees along the perimeter
const calculateTreesOnPerimeter = (grid:Array<number[]>) => {
    return grid.length * 4 - 4
}


//now we iterate through each of the inner arrays and determine how many trees are visible
//let's come up with routine:

let example = 
[[3, 0, 3, 7, 3],
[2, 5, 5, 1, 2],
[6, 5, 3, 3, 2],
[3, 3, 5, 4, 9],
[3, 5, 3, 9, 0]]

//(1, 1) through (1, n-1)
// for each value, check if visible from west, east, then check if visible from north south

//let's look at tree (1, 2), which is 5 units tall
//from west: not visible
//from east: visible

// (in transpose for north south, we're looking at tree (2, 1))
//from north: visible 
//from south: not visible


const calculateVisibleTrees = (grid) => {
    //define if current tree index is visible function
    const checkIfCurrentIsVisible = (treeIndex:number, treeLine: number[]) => {
        const treesBefore = treeLine.slice(0, treeIndex);
        //check if current index is visible from the beginning of the treeLine
        return treeLine[treeIndex] > Math.max(...treesBefore)
    }

    let tgrid = transpose(grid);
    let visibleTrees = 0;
    for (let i = 1; i < grid.length-1; i++){
        for (let j = 1; j < grid.length-1; j++){
            //now check all 4 directions
            if (checkIfCurrentIsVisible(j, grid[i]) 
            || checkIfCurrentIsVisible(grid[i].length - j - 1, grid[i].slice().reverse())
            || checkIfCurrentIsVisible(i, tgrid[j])
            || checkIfCurrentIsVisible(tgrid[j].length - i -1, tgrid[j].slice().reverse())
            ) visibleTrees ++
        }
    }
    return visibleTrees;
}

// let testLine = [0,0,3,1,2,3,0,0,1,1,1,4,1,4,2,5,5,4];
// // console.log(testLine.reverse())
// let testLineReversed = testLine.slice().reverse();
// console.log(testLineReversed)
// console.log(testLineReversed[testLine.length-1-3])
// console.log(checkIfCurrentIsVisible(testLine.length-1-3, testLine.slice().reverse()))

// let calulation = calculateTreesOnPerimeter(grid) + calculateVisibleTrees(grid)
// console.log(calulation)


/////////SECOND PAART///////


//for each tree, slice the array between it and the edge in each direction
const calculateBestTreeHouse = (grid) => {
    let tgrid = transpose(grid);
    //define the number of treesVisible based on current tree height
    //and the sliced array in the direction in question
    const numberOfTreesVisible = (treeHeight, slicedArray) => {
        let i = 0
        while (slicedArray[i] !== undefined){
            if (slicedArray[i] >= treeHeight) {
                i++; //add last tree
                break;
            }
            i++;
        }
        return i
    }
    let slength = grid[0].length;
    let right, left, up, down;

    const scoreArray = [];
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++){
            //get all to the right
            right = grid[i].slice(j+1, slength);
            left = grid[i].slice().reverse().slice(slength - j, slength)
            up = tgrid[j].slice(i+1, slength);
            down = tgrid[j].slice().reverse().slice(slength-i, slength)

            // console.log("i: ", i)
            // console.log("j: ", j)
            // console.log("size: ", grid[i][j])

            let score = 1;
            let visible;
            for (let arr of [right, left, up, down]){
                // console.log(arr)
                visible = numberOfTreesVisible(grid[i][j], arr);
                // console.log("visible: ",visible)
                
                score = visible * score;
            }
            scoreArray.push(score);
        }
    }
    return scoreArray
}

console.log(Math.max(...calculateBestTreeHouse(grid)))
export {};