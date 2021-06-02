/*
sortOdds takes an array and sorts the odd numbers in ascending order,
while the even numbers remain in place.
*/

const sortOdds = (arr) => {
  let oddNums = {};
  arr.forEach((num, idx) => {
    if (Math.abs(num) % 2 === 1) {
      oddNums[idx] = num;
    }
  });
  const values = Object.values(oddNums).sort((a, b) => a - b);
  Object.keys(oddNums).forEach((key, idx) => {
    arr[key] = values[idx];
  });
  return arr;
};

// console.log(sortOdds([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
// console.log(sortOdds([7, 2, 5, 6, 3, 8, -3, -9, 4])); // [-9, 2, -3, 6, 3, 8, 5, 7, 4]
