export const runPart1 = (data) => {
  let gameScore:number, myHand:number, score = 0;
  for (let game of data) {
    switch (game) {
      case "AX":
      case "BY":
      case "CZ":
        gameScore = 3;
        break;
      case "AY":
      case "BZ":
      case "CX":
        gameScore = 6;
        break;
      case "AZ":
      case "BX":
      case "CY":
        gameScore = 0;
        break;
    }

    switch ([...game][1]) {
      case "X":
        myHand = 1;
        break;
      case "Y":
        myHand = 2;
        break;
      case "Z":
        myHand = 3;
        break;
    }
    score += myHand + gameScore;
  }
  console.log(score);
};
export const runPart2 = (data) => {
  data = data.map((g:string) => [...g]);
  let gameScore:number, myHand:number, score=0;

  const lose = (elfHand:string) => {
    switch (elfHand) {
      case "A":
        return 3;
      case "B":
        return 1;
      case "C":
        return 2;
    }
  };
  const draw = (elfHand:string) => {
    switch (elfHand) {
      case "A":
        return 1;
      case "B":
        return 2;
      case "C":
        return 3;
    }
  };
  const win = (elfHand:string) => {
    switch (elfHand) {
      case "A":
        return 2;
      case "B":
        return 3;
      case "C":
        return 1;
    }
  };

  for (let game of data) {
    switch (game[1]) {
      case "X":
        gameScore = 0;
        myHand = lose(game[0])
        break;
      case "Y":
        gameScore = 3;
        myHand = draw(game[0])
        break;
      case "Z":
        gameScore = 6;
        myHand = win(game[0])
        break;
    }
    score+=gameScore+myHand
  }
  console.log(score)
};
