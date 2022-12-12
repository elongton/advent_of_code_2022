import { runPart1, runPart2 } from "./attempt1";
const fs = require("fs");
let filename = "puzzle_12_input.txt";
let content = fs.readFileSync(process.cwd() + "/day12/" + filename).toString();

const parsed = content.split('\n');

export class Node{
    elevation:string;
    linkedTo: Node[] = [];
    visited: boolean = false;
    howFar:number;
    constructor(elevation:string){
        this.elevation = elevation;
    }
    createAddLink(elevation:string):Node{
        let newNode = new Node(elevation);
        newNode.addLink(this);
        this.linkedTo.push(newNode)
        return newNode;
    }

    addLink(node:Node){
        this.linkedTo.push(node);
    }
}


const createGraph = (parsed: string[]) => {
    let currentNode:Node, nextNode:Node;
    let currentRow:string[];
    let nodeGrid = [];
    //create rows and handle left/right links
    for (let i=0; i < parsed.length; i++){
        let currentNodeArray = [];
        currentRow = [...parsed[i]];
        // console.log(currentRow.length)
        //initialize first node in row
        currentNode = new Node(currentRow[0])
        //remainder of nodes
        for (let j = 0; j < currentRow.length; j++){
            currentNodeArray.push(currentNode);
            if (currentRow[j+1]){
                currentNode = currentNode.createAddLink(currentRow[j+1])
            }
            
        }
        nodeGrid.push(currentNodeArray)
    }
    //handle top/bottom links
    for (let i=0; i < nodeGrid.length; i++){
        for (let j=0; j<nodeGrid[i].length; j++){
            if (nodeGrid[i+1]){
                nodeGrid[i][j].addLink(nodeGrid[i+1][j]);
            }
            if (nodeGrid[i-1]){
                nodeGrid[i][j].addLink(nodeGrid[i-1][j]);
            }
        }
    }
    return nodeGrid;
}

let nodeGrid = createGraph(parsed)
// runPart1(nodeGrid[20][0])

// for part 2, we need to find start candidates:
let startingNodes = [];
for (let row of nodeGrid){
    for(let node of row){
        if (node.elevation == 'a'){
            startingNodes.push(node)
        }
    }
}
runPart2(startingNodes, nodeGrid)


//not 2692