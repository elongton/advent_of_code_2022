import { Instruction } from "."

class CPU {
    values = [1];
    cycle = 0;

    constructor(){}
    getCurrentValue(){
        return this.values[this.values.length-1];
    }
    noop(){
        this.cycle++
        this.values.push(this.getCurrentValue());
    }
    addx(value){
        this.cycle++
        this.values.push(this.getCurrentValue());
        this.cycle++
        this.values.push(this.getCurrentValue()+value)
    }
    getValues(){
        return this.values
    }
}


export const runPart1 = (instructions: Instruction[]) => {
    const cpu = new CPU();
    for (let instruction of instructions){
        if (instruction.operation == 'noop'){
            cpu.noop();
        }else if (instruction.operation == 'addx'){
            cpu.addx(instruction.value)
        }
    }
    return cpu.getValues();
}

export const runPart2 = (instructions: Instruction[]) => {
    let values = runPart1(instructions);
    console.log(values)
    console.log(values.length)
    let CRTArray = new Array(240).fill('.');
    let normalized_i;
    values.forEach((val, i)=> {
        normalized_i = i;
        if (i > 39) normalized_i = i-40;
        if (i > 79) normalized_i = i-80;
        if (i > 119) normalized_i = i-120;
        if (i > 159) normalized_i = i-160;
        if (i > 199) normalized_i = i-200;
        if (i > 239) normalized_i = i-240;
        
        if (normalized_i == val || normalized_i == val-1 || normalized_i == val +1){
            CRTArray[i] = '#';
        }
    })
    console.log(CRTArray.slice(0, 40).join(''))
    console.log(CRTArray.slice(40, 80).join(''))
    console.log(CRTArray.slice(80, 120).join(''))
    console.log(CRTArray.slice(120, 160).join(''))
    console.log(CRTArray.slice(160, 200).join(''))
    console.log(CRTArray.slice(200, 240).join(''))
}

