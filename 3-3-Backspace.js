// Write a function that takes a string and returns a string.
// The character '#' represents a backspace.  The returned string should handle these backspaces.
// For example:

//create variable for returned string
//loop through chars from the start
//if char is not a # add char to returned string.
//else slice string

const backspace = (string) => {
  let sanitStr = '';
  string.split('').forEach((char) => {
    char !== '#' ? (sanitStr += char) : (sanitStr = sanitStr.slice(0, -1));
  });
  return sanitStr;
};

console.log(backspace('abc#d##c'));
// 'ac'
console.log(backspace('fueoc###ll#lsoi##tac##ackwl##'));
// 'fullstack'
console.log(backspace('aca##demy#####'));
// ''
