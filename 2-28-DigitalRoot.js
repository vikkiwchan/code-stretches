/*
The "digital root" of a number is the single-digit recursive sum of all of its digits.
For example:
345 --> 3 + 4 + 5 --> 12 --> 1 + 2 --> 3
493193 --> 4 + 9 + 3 + 1 + 9 + 3 --> 29 --> 2 + 9 --> 11 --> 1 + 1 --> 2
Write a function that takes in a positive integer and returns the digital root.
*/

/*
LOGIC
if Num < 9, return num
Convert num to string and split it
Convert string to num. split into array and use reduce to add nums
Recursive case: if num > 9, return func
*/
const digitalRoot = (num) => {
  if (num < 10) {
    return num;
  } else {
    const newNum = num
      .toString()
      .split('')
      .reduce((acc, num) => {
        return acc + Number(num);
      }, 0);
    return digitalRoot(newNum);
  }
};

console.log(digitalRoot(493193)); //2
console.log(digitalRoot(345)); //3
console.log(digitalRoot(837)); //9
