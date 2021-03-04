/*
Write a function that takes an array of strings and prints them one per line, in a rectangular frame.

Example: movieposter(['Once','Upon','a','Time','in','the','West'])) ==>
 ********
 * Once *
 * Upon *
 * a    *
 * Time *
 * in   *
 * the  *
 * West *
 ********

const movieposter=(array)=>{
... code here
};
*/

// LOGIC
// find the longest word in array using reduce
// create a number variable for length of word + 4(chars for '*' & ' ')
// map over each word
// create a variable for decorating the poster using String.prototype.padStart()
// use .unshift and push to add decoration
// join array elements using ('\n')

const movieposter = (array) => {
  const longestWord = array.reduce(
    (word, acc) => (word.length > acc.length ? (acc = word) : acc),
    ''
  );
  const numOfChars = longestWord.length + 4;
  const decorationElem = ''.padStart(numOfChars, '*');
  array = array.map((word) => ('* ' + word).padEnd(numOfChars - 1, ' ') + '*');
  return [decorationElem, ...array, decorationElem].join('\n');
};

// console.log(movieposter(['Once', 'Upon', 'a', 'Time', 'in', 'the', 'West']));
// console.log(movieposter(['The', 'Westside', 'Story']));
// console.log(movieposter(['Game', 'of', 'Thrones']));
