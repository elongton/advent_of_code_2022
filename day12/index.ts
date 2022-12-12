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
    // for (let node of nodeGrid[nodeGrid.length-1]){
    //     console.log(node.linkedTo)
    // }
    // console.log(nodeGrid[0].length)
    // console.log(nodeGrid[0][66])
    return nodeGrid[20][0];
}

// createGraph(parsed)

runPart1(createGraph(parsed))
// runPart2(content)


//not 2692