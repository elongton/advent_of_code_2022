class BarrelOMonkeys {
  monkeyArray: Monkey[] = [];
  constructor(monkeyArray, MonkeyFactory) {
    for (let [index, value] of monkeyArray.entries()) {
      this.monkeyArray.push(MonkeyFactory(value, index));
    }
  }
  initiateMonkeySequence(rounds) {
    let throwTo;
    for (let i = 0; i < rounds; i++) {
      for (let monkey of this.monkeyArray) {
        throwTo = monkey.processItems();
        throwTo.forEach((to) => this.monkeyArray[to.monkey].addItem(to.item));
      }
    }
  }

  determineMonkeyBusiness() {
    this.monkeyArray.sort((a, b) => {
      if (a.itemsInspected > b.itemsInspected) return -1;
      else return 1;
    });
    // console.log(this.monkeyArray)
    let monkey1 = this.monkeyArray[0].itemsInspected;
    let monkey2 = this.monkeyArray[1].itemsInspected;
    return monkey1 * monkey2;
  }

  listMonkeys() {
    console.log(this.monkeyArray);
  }
}

class Monkey {
  id: null;
  items: Number[] = [];
  itemsInspected = 0;
  operation;
  mtest: { divisibleBy: number; istrue: number; isfalse: number };
  constructor(monkey, id) {
    this.id = id;
    this.items = monkey.startingItems;
    this.operation = monkey.operation;
    this.mtest = { ...monkey.test };
  }
  static monkeyFactory(monkey, id) {
    return new Monkey(monkey, id);
  }
  relief(item) {
    return Math.floor(item / 3);
  }
  inspect(item) {
    this.itemsInspected++;
    return this.operation(item);
  }
  test(item) {
    if (item % this.mtest.divisibleBy == 0) {
      return this.mtest.istrue;
    }
    return this.mtest.isfalse;
  }
  clearItems() {
    this.items = [];
  }

  processItems(): { monkey: number; item: number }[] {
    let throwToArray = [];
    for (let item of this.items) {
      item = this.inspect(item); //apply operation
      item = this.relief(item); //apply relief that it wasn't broken
      throwToArray.push({ monkey: this.test(item), item: item });
    }
    this.clearItems();
    return throwToArray;
  }

  addItem(item) {
    this.items.push(item);
  }
}

export const runPart1 = (monkeyArray) => {
  const barrel = new BarrelOMonkeys(monkeyArray, Monkey.monkeyFactory);
  barrel.initiateMonkeySequence(20);
  console.log(barrel.determineMonkeyBusiness());
};

////////////Part 2////////////

// // https://www.geeksforgeeks.org/how-to-compute-mod-of-a-big-number/
// const bigMod = (num, a) => {
//   // Initialize result
//   let res = 0;
//   // One by one process
//   // all digits of 'num'
//   for (let i = 0; i < num.length; i++) res = (res * 10 + parseInt(num[i])) % a;

//   return res;
// };

class CrazyMonkey extends Monkey {
    constructor(monkey, id) {
      super(monkey, id);
    }
    static monkeyFactory(monkey, id) {
      return new CrazyMonkey(monkey, id);
    }
  
    //relief has to change now...
    relief(item: any): number {
        //I'm subtracting the least common multiple of all divisble tests until it goes under 0
        //19*5*11*17*7*13*3*2 = 9699690
        if (item > 9699690){
            while (item - 9699690 > 0){
                item = item - 9699690
            }
        }
      return item;
    }
  
    //using bigMod now, which can handle any number
    test(item) {
      if (item % this.mtest.divisibleBy == 0) {
        return this.mtest.istrue;
      }
      return this.mtest.isfalse;
    }
  }

export const runPart2 = (monkeyArray) => {
    const barrel = new BarrelOMonkeys(monkeyArray, CrazyMonkey.monkeyFactory);
    // barrel.listMonkeys();
    barrel.initiateMonkeySequence(10000);
    console.log(barrel.determineMonkeyBusiness());
};
