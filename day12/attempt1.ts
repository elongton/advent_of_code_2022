import { Node } from ".";

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const elevationMap = [...alphabet].reduce((acc, curr, index)=> {
    acc[curr] = index + 1;
    return acc
}, {})

elevationMap['S'] = 1;
elevationMap['E'] = 26;





const explore = (node:Node, step:number) => {
    node.visited = true;
    // console.log(step)
    // console.log(node.elevation)
    // console.log(node)
    if (node.elevation === 'E'){
        console.log(step)
        return;
    }
    for (let enode of node.linkedTo){
        console.log(enode.elevation)
        console.log(elevationMap[enode.elevation] - elevationMap[node.elevation])
        if (!enode.visited && (elevationMap[enode.elevation] - elevationMap[node.elevation]  <= 1)){
            step++
            return explore(enode, step);
        }
    }
}




export const runPart1 = (startingPoint) => {
    // console.log(startingPoint)
    explore(startingPoint, 0)

}
export const runPart2 = (data) => {}