import { Coordinate, Direction, Instruction } from ".";

class RopeEnd {
  private history: Coordinate[] = [];
  constructor(startingCoordinate: Coordinate) {
    this.history.push(startingCoordinate);
  }
  getCoordinates(): Coordinate[] {
    return this.history;
  }
  getUniqueCoordinates() {
    return new Set(this.history.map((c) => String(c)));
  }
  addCoordinate(coordinate: Coordinate) {
    this.history.push(coordinate);
  }
  getCurrentPosition(): Coordinate {
    return <Coordinate>this.history[this.history.length - 1].slice();
  }
  getCurrentDistanceFromPoint(referencePoint: Coordinate) {
    let currentPosition = this.getCurrentPosition();
    return Math.sqrt(
      (referencePoint[0] - currentPosition[0]) ** 2 +
        (referencePoint[1] - currentPosition[1]) ** 2
    );
  }
  moveInDirection(direction: Direction): Coordinate {
    let newPosition = this.getCurrentPosition();
    switch (direction) {
      case "U":
        newPosition[1]++;
        break;
      case "D":
        newPosition[1]--;
        break;
      case "R":
        newPosition[0]++;
        break;
      case "L":
        newPosition[0]--;
        break;
    }
    this.addCoordinate(newPosition);
    return this.getCurrentPosition();
  }
}

class Tail extends RopeEnd {
  constructor(startingCoordinates) {
    super(startingCoordinates);
  }
  followHead(headPosition: Coordinate): void {
    let tailPosition = this.getCurrentPosition();
    const distance = this.getCurrentDistanceFromPoint(headPosition);

    //if the following are  > 0, then head is ahead, and tail must move R or U
    const xsign = Math.sign(headPosition[0] - tailPosition[0]);
    const ysign = Math.sign(headPosition[1] - tailPosition[1]);

    //if the distance is two, then they are in row/column
    if (distance == 2) {
      if (xsign !== 0) {
        xsign > 0 ? this.moveInDirection("R") : this.moveInDirection("L");
      } else {
        ysign > 0 ? this.moveInDirection("U") : this.moveInDirection("D");
      }
      //if the distaance is > 2, then they are not in same row/column and tail must move diagonally
    } else if (distance > 2) {
      if (xsign > 0 && ysign > 0) {
        this.addCoordinate([tailPosition[0] + 1, tailPosition[1] + 1]);
      } else if (xsign > 0 && ysign < 0) {
        this.addCoordinate([tailPosition[0] + 1, tailPosition[1] - 1]);
      } else if (xsign < 0 && ysign < 0) {
        this.addCoordinate([tailPosition[0] - 1, tailPosition[1] - 1]);
      } else if (xsign < 0 && ysign > 0) {
        this.addCoordinate([tailPosition[0] - 1, tailPosition[1] + 1]);
      }
    } else {
      this.addCoordinate(tailPosition);
    }
  }
}

export function runPart1(directions: Instruction[]) {
  const head = new RopeEnd([0, 0]);
  const tail = new Tail([0, 0]);
  let currentHeadCoord;
  for (let instruction of directions) {
    for (let i = 0; i < instruction[1]; i++) {
      currentHeadCoord = head.moveInDirection(instruction[0]);
      tail.followHead(currentHeadCoord);
    }
  }

  return tail.getUniqueCoordinates();
}
export function runPart2(directions: Instruction[]) {
  const head = new RopeEnd([0, 0]);
  const tailArray = [
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
    new Tail([0,0]),
  ]
  let currentHeadCoord;
  for (let instruction of directions) {
    for (let i = 0; i < instruction[1]; i++) {
      currentHeadCoord = head.moveInDirection(instruction[0]);
      tailArray[0].followHead(currentHeadCoord)
      for (let j=1; j < tailArray.length; j++){
        tailArray[j].followHead(tailArray[j-1].getCurrentPosition())
      }
    }
  }

  return tailArray[tailArray.length-1].getUniqueCoordinates();
}
