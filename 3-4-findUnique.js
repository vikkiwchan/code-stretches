//use reduce to create an object
//if num has a value of 1 return that kay - for let key loop

/*
const findUnique = (arr) => {
  const numObj = arr.reduce((acc, elem) => {
    if (!(elem in acc)) {
      acc[elem] = 1;
    } else {
      acc[elem] += 1;
    }
    return acc;
  }, {});
  for (let key in numObj) {
    if (numObj[key] === 1) {
      return key;
    }
  }
};
*/

const findUnique = (arr) => {
  const numObj = arr.reduce((acc, elem) => {
    elem in acc ? (acc[elem] += 1) : (acc[elem] = 1);
    return acc;
  }, {});
  for (let key in numObj) {
    if (numObj[key] === 1) {
      return key;
    }
  }
};

console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([1, 2, 4, 1, 4, 2, 3, 3, 5, 6, 1, 6, 2, 4]));
