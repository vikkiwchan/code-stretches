// write a function called randomWord that will generate a 3 letter word starting and ending with a consonant, with a vowel in between

// Examples:
// dad - Y
// fad - Y
// ada - N

const randomWord = () => {
  // define consonants in a variable
  const consonant = 'bcdfgjklmnpqstvxzhrw';
  // define vowels in a variable
  const vowels = 'aeiou';
  // helper function that generates a random index
  const randConsonant = consonant[randomIndex(consonant)];
  const randVowel = vowels[randomIndex(vowels)];
  return randConsonant + randVowel + randConsonant;
};

const randomIndex = (str) => Math.floor(Math.random() * str.length);

console.log(randomWord());
