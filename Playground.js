/*
const nums = [1, 2, 3];

const add = (nums) => {
  return nums.reduce((sum, num) => sum + num, 0);
};

console.log(add(nums));
*/

// write the function moreZeroes that takes a string
// and returns a string of only the letters whose binary value contain more zeroes than ones
// for example: 'cat' --> [ '1100011', '1100001', '1110100' ] => ['1100001'] --> 'a'

let str = 'cat';
console.log(str.toBinaryString());

//console.log(moreZeroes('banana'))
// => 'baaa'
//console.log(moreZeroes('raspberry'))
// => 'apb'
//console.log(moreZeroes('apple'))
// => 'app'

Ffr: charCodeAt(0).toString(2);??
