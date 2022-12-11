

class QueueStack{
    currentFour = [];
    private distinctCharacters = 4;
    private index = 0;
    constructor(distinctCharacters=4){
        this.distinctCharacters = distinctCharacters
    }

    addCharacter(character){
        if (this.currentFour.length < this.distinctCharacters){
            this.currentFour.push(character);
        }else{
            this.currentFour.shift();
            this.currentFour.push(character)
        }
        this.index++
    }
    checkIfUnique(){
        if (this.currentFour.length == this.distinctCharacters){
            return new Set(this.currentFour).size == this.distinctCharacters
        }
    }
    getIndex(){
        return this.index
    }
    getCurrentFour(){
        return this.currentFour;
    }
}



export const runPart1 = (parsedCharacterArray)=> {
    const wormy = new QueueStack();
    parsedCharacterArray.every(c => {
        wormy.addCharacter(c);
        if (wormy.checkIfUnique()){
            console.log(wormy.getIndex())
            console.log(wormy.getCurrentFour())
            return false
        }
        return true;
    })
}

export const runPart2 = (parsedCharacterArray)=> {
    const wormy = new QueueStack(14);
    parsedCharacterArray.every(c => {
        wormy.addCharacter(c);
        if (wormy.checkIfUnique()){
            console.log(wormy.getIndex())
            console.log(wormy.getCurrentFour())
            return false
        }
        return true;
    })
}