import { Instruction } from ".";

class StackArray {
  stacks: Map<number, Stack> = new Map();
  constructor(stackStringArray) {
    for (let [index, value] of stackStringArray.entries()) {
      this.stacks.set(index + 1, new Stack(value, index + 1));
    }
    this.showStacks();
  }
  showStacks() {
    console.log(this.stacks);
  }

  getTops() {
    let topString = "";
    for (let stack of this.stacks.values()) {
      topString += stack.content.slice(-1)[0];
    }
    return topString;
  }
}

class Stack {
  id: number = null;
  content: String[] = [];
  constructor(stackString: string, id: number) {
    this.id = id;
    const stackArray = [...stackString];
    for (let crate of stackArray) {
      this.addCrate(crate);
    }
  }
  addCrate(crate: String) {
    if (crate) {
      this.content.push(crate);
    }
  }
  addCrates(crates: String[]) {
    if (crates) {
      this.content = [...this.content, ...crates];
    }
  }
  removeCrate(): String {
    return this.content.pop();
  }
  removeCrates(quant): String[] {
    return this.content.splice(-quant);
  }
}

export const runPart1 = (stacks, instructions: Instruction[]) => {
  let stackManager = new StackArray(stacks);
  for (let i of instructions) {
    for (let n = 0; n < i.move; n++) {
      stackManager.stacks
        .get(i.to)
        .addCrate(stackManager.stacks.get(i.from).removeCrate());
    }
  }

  console.log(stackManager.getTops());
};

export const runPart2 = (stacks, instructions: Instruction[]) => {
  let stackManager = new StackArray(stacks);
  for (let i of instructions) {
    stackManager.stacks
      .get(i.to)
      .addCrates(stackManager.stacks.get(i.from).removeCrates(i.move));
  }

  console.log(stackManager.getTops());
};
