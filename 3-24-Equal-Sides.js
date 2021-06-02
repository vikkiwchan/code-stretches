// the index where the sum to the left of the index equals the sum to the right of the index
// if the index does not exist, return -1

//this may be a nested for-loop

const equalSides = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const arrLeftSum =
      i > 0 ? arr.slice(0, i).reduce((acc, elem) => acc + elem, 0) : i;
    const arrRightSum = arr.slice(i + 1).reduce((acc, elem) => acc + elem, 0);

    // console.log(
    //   `i:${i},  arrLeftSum: ${arrLeftSum}, arrRightSum: ${arrRightSum}`
    // );
    if (arrLeftSum === arrRightSum) {
      return i;
    }
  }
  return -1;
};

console.log(equalSides([2, 3, 1, 3, 1, 1])); // 2
console.log(equalSides([8, 4, 3, 2, 2, 9])); // -1
console.log(equalSides([7, 1, 6, -3, -4])); // 0
