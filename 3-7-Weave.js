// write the function weave that takes in any number of arrays as arguments and returns 1 interwoven array.
// arrays can be different lengths, if you reach the end of a shorter array, use a null value in its place

// LOGIC
// get max value of longest array
// nest arrays and map through them
// array fill may be used here
// loop through same index value of each array in order and push it to new array

const weave = (...arrs) => {
  const arrArgs = [...arrs];
  let longestLength = arrArgs.reduce(
    (acc, elem) => (elem.length > acc ? elem.length : acc),
    0
  );
  let result = [];
  for (let i = 0; i < longestLength; i++) {
    arrArgs.forEach((arr) =>
      arr[i] ? result.push(arr[i]) : result.push(null)
    );
  }
  return result;
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(weave(arr1, arr2));
// [1, 2, 3, 4, 5, 6];

const arr3 = [1, 4];
const arr4 = [2, 5, 7];
const arr5 = [3, 6, 8, 9, 10];
console.log(weave(arr3, arr4, arr5));
// [1, 2, 3, 4, 5, 6, null, 7, 8, null, null, 9, null, null, 10]
