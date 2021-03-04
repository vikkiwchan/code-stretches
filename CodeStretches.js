// console.log('hello world');
//create a union of unique numbers

// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 3, 5, 5, 6];

// const arr1 = [8, 9, 9, 9];
// const arr2 = [2, 3, 5, 5, 6];

// //use pointers
const union = (arr1, arr2) => {
  const unionArr = [];
  for (let elem of arr1) {
    if (arr2.includes(elem) && !unionArr.includes(elem)) {
      unionArr.push(elem);
    }
  }
  return unionArr;
};

// console.log(union(arr1, arr2));

// Write a class Calculator that can add/subtract any number of arguments
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(args) {
    const arrayOfNums = [...arguments];
    console.log(arrayOfNums);
    for (let elem of arrayOfNums) {
      this.value += elem;
    }
  }

  subtract(args) {
    const arrayOfNums = [...arguments];
    for (let elem of arrayOfNums) {
      this.value -= elem;
    }
  }

  clear() {
    this.value = 0;
  }
}

// const calc = new Calculator();

// console.log(calc.value); // 0

// calc.add(1);

// calc.add(1, 1);

// calc.add(2, 3, 1, 2);

// console.log(calc.value); // 11

// calc.subtract(1, 2, 3, 4);

// console.log(calc.value); // 1

// calc.add(5);

// calc.clear();

// console.log(calc.value); // 0

// 2.12.21 - Write your own stretch with prompt and solution cod
// Write a function that will create an object from any given number of arrays as arguments. The object will contain unique keys and quantities of any repeating elements from the arguments.

const consolidate = (...args) => {
  const argArrays = [...args];
  let result = {};
  argArrays.forEach((array) => {
    array.forEach((elem) => {
      if (!(elem in result)) {
        result[elem] = 1;
      } else {
        result[elem] += 1;
      }
    });
  });
  return result;
};

//TESTING FUNCTION
/*
function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed');
  } else {
    console.log(
      `FAILED [ ${testName} ] Expected ${expected}, but got ${actual}`
    );
  }
}

const consolidationWorks =
  'Consolidates array elements to one object with unique keys';

//TEST CASE 1
const hotPotIng1 = ['bokChoy', 'mushrooms', 'fishBalls', 'beef'];
const hotPotIng2 = ['fishBalls', 'taroRoot', 'bokChoy', 'noodles'];
const hotPotIng3 = ['lamb', 'riceCakes', 'bokChoy', 'mushrooms'];

const ingredientsList = {
  bokChoy: 3,
  mushrooms: 2,
  fishBalls: 2,
  beef: 1,
  taroRoot: 1,
  noodles: 1,
  lamb: 1,
  riceCakes: 1,
};

assertEqual(
  consolidate(hotPotIng1, hotPotIng2, hotPotIng3),
  ingredientsList,
  consolidationWorks
);

//TEST CASE 2
const arr1 = ['a', 'b', 'c'];
const arr2 = ['x', 'a'];
const arr3 = ['a', 'c'];

const resultArr = {
  a: 3,
  b: 1,
  c: 2,
  x: 1,
};

assertEqual(consolidate(arr1, arr2, arr3), resultArr, consolidationWorks);
*/

// 2.21.21
// Similar to foundations MapQuest problem
// Stanley's solution
function directionReducer(arr) {
  const stack = [];
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  };
  for (const currentDirection of arr) {
    const previousDirection = stack[stack.length - 1]; // the top of the stack
    if (opposites[currentDirection] === previousDirection) {
      stack.pop();
    } else {
      stack.push(currentDirection);
    }
  }
  return stack;
}

// 2.22.21
// Lock and Key
//Create a function 'LockAndKey' that takes two arguments "key" and "message".

//LockAndKey should return an object that has ONLY two methods, "modKey" and "retrieveMessage", and no other key value pairs.

//Modkey should take two arguments "prevKey" and "newKey" and, if equal, modify the original key value.

//RetrieveMessage should take one argument "enterKey" and, if equal to the original or modified key, should return the message.

//const newLock = lockAndKey('1234', "super secret message") console.log(newLock.modKey('1234','345')) // => "key changed" console.log(newLock.retrieveMessage('3232'))// => invalid key console.log(newLock.retrieveMessage('345')) // => "super secret message"

const lockAndKey = (key, message) => {
  return {
    key: key,
    modKey(prevKey, newKey) {
      if (!(prevKey === newKey)) {
        this.key = newKey;
        return 'key changed';
      }
    },
    retrieveMessage(enterKey) {
      return enterKey === this.key ? message : 'invalid key';
    },
  };
};

/*
const newLock = lockAndKey('1234', 'super secret message');
console.log(newLock.modKey('1234', '345')); // => "key changed"
console.log(newLock.retrieveMessage('3232')); // => invalid key
console.log(newLock.retrieveMessage('345')); // => "super secret message"
*/
