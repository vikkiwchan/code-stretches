// write the function findAnagrams that takes a word, an array of words, and returns any words from the array that are anagrams of the first word.

// store result in an empty array
// loop over each word
// if word length and each letter is inclueded in string, push to result
// return result

const findAnagrams = (word, array) => {
  let result = [];
  array.forEach((arrWord) => {
    if (
      arrWord.length === word.length &&
      arrWord.split('').every((char) => word.includes(char))
    ) {
      result.push(arrWord);
    }
  });
  return result;
};

const word = 'smile';
const array = [
  'limes',
  'lime',
  'lemon',
  'slimes',
  'miles',
  'kilometers',
  'slimey',
];

console.log(findAnagrams(word, array));
// [ 'limes', 'miles' ]
