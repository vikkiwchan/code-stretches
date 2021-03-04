/*
Palindrome Check -> Write a function that takes a string and checks whether that string is a valid Palindrome. If the given string has spaces, ignore them.

const palindromeCheck = (str) => {

// code in here
*/

//split string into array
//loop through middle of str
//if first and last string do not equal each other return false

const palindromeCheck = (string) => {
  string = string.split(' ').join('');
  const middleIdx = Math.floor(string.length / 2);
  const j = string.length - 1;
  for (let i = 0; i < middleIdx; i++) {
    if (string[i] !== string[j - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindromeCheck('abba')); //==> true
console.log(palindromeCheck('abcdcba')); //==> true
console.log(palindromeCheck('w ert yt rew')); //==> true
console.log(palindromeCheck('abcde')); //==> false
console.log(palindromeCheck('123653453524')); //==> false\
