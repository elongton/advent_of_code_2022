export const monkeyArray = [
    {
      startingItems: [91, 66],
      operation: (old) => old * 13,
      test: {
        divisibleBy: 19,
        istrue: 6,
        isfalse: 2,
      },
    },
    {
      startingItems: [78, 97, 59],
      operation: (old) => old + 7,
      test: {
        divisibleBy: 5,
        istrue: 0,
        isfalse: 3,
      },
    },
    {
      startingItems: [57, 59, 97, 84, 72, 83, 56, 76],
      operation: (old) => old + 6,
      test: {
        divisibleBy: 11,
        istrue: 5,
        isfalse: 7,
      },
    },
    {
      startingItems: [81, 78, 70, 58, 84],
      operation: (old) => old + 5,
      test: {
        divisibleBy: 17,
        istrue: 6,
        isfalse: 0,
      },
    },
    {
      startingItems: [60],
      operation: (old) => old + 8,
      test: {
        divisibleBy: 7,
        istrue: 1,
        isfalse: 3,
      },
    },
    {
      startingItems: [57, 69, 63, 75, 62, 77, 72],
      operation: (old) => old * 5,
      test: {
        divisibleBy: 13,
        istrue: 7,
        isfalse: 4,
      },
    },
    {
      startingItems: [73, 66, 86, 79, 98, 87],
      operation: (old) => old * old,
      test: {
        divisibleBy: 3,
        istrue: 5,
        isfalse: 2,
      },
    },
    {
      startingItems: [95, 89, 63, 67],
      operation: (old) => old + 2,
      test: {
        divisibleBy: 2,
        istrue: 1,
        isfalse: 4,
      },
    },
  ];