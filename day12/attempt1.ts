import { Node } from ".";

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const elevationMap = [...alphabet].reduce((acc, curr, index)=> {
    acc[curr] = index + 1;
    return acc
}, {})

elevationMap['S'] = 1;
elevationMap['E'] = 26;


class Queue{
    content = [];
    constructor(content=[]){
        this.content = content;
    }

    enqueue(node:Node){
        this.content.unshift(node);
    }

    dequeue(){
        return this.content.pop()
    }

    isEmpty(){
        return this.content.length == 0;
    }
    showContents(){
        console.log(this.content)
    }
}


// const explore = (node:Node, step:number) => {
//     node.visited = true;
//     if (node.elevation === 'E'){
//         console.log(step)
//         return;
//     }
//     for (let enode of node.linkedTo){
//         console.log(enode.elevation)
//         console.log(elevationMap[enode.elevation] - elevationMap[node.elevation])
//         if (!enode.visited && (elevationMap[enode.elevation] - elevationMap[node.elevation]  <= 1)){
//             step++
//             return explore(enode, step);
//         }
//     }
// }


const bfs = (root: Node) => {
    let queue = new Queue();
    root.visited = true;
    root.howFar = 0;
    queue.enqueue(root);
    let currentNode:Node;
    while (!queue.isEmpty()){
        // queue.showContents();
        currentNode = queue.dequeue();
        if (currentNode.elevation == 'E'){
            console.log(currentNode)
            console.log('found')
        }
        for (let node of currentNode.linkedTo){
            if (!node.visited && (elevationMap[node.elevation] - elevationMap[currentNode.elevation]  <= 1) ){
                node.visited = true;
                node.howFar = currentNode.howFar+1;
                queue.enqueue(node);
            }
        }
    }

}




export const runPart1 = (startingPoint) => {
    // console.log(startingPoint)
    // explore(startingPoint, 0)
    bfs(startingPoint)

}
export const runPart2 = (data) => {}