/*
"monkey-patching" means changing the behavior of built-in code at runtime.
your job is to monkey-patch the Array class, by adding a method called "countBy"
countBy should optionally take a function argument
countBy returns an object whose keys correspond to the elements in the array it is called on, and whose values correspond to the number of times that element appears in the array
when countBy is passed a function argument "fn", the values correspond to the number of times that key was returned by fn.
NB: monkey-patching is generally not good, do not do it, this is just an exercise
Also NB: repl.it doesn't let you monkey patch! but the chrome console does.
*/

const arr = [1, 2, 3, 3, 2, 32, 3, 3, 4, 5];

Array.prototype.countBy = function (callback) {
  const newObj = {};
  for (let i = 0; i < this.length; i++) {
    let elem = this[i];
    if (typeof callback === 'function') {
      elem = callback(elem);
    }
    if (!(elem in newObj)) {
      newObj[elem] = 1;
    } else {
      newObj[elem] += 1;
    }
  }
  return newObj;
};

//console.log('TEST:', arr.countBy());
//console.log(arr.countBy((num) => num % 3));

const arrOfStrings = [
  'abe',
  'banana',
  'compost',
  'accurate',
  'angery',
  'boister',
];

console.log(arrOfStrings.countBy((str) => str[0]));

/*
{1: 1, 2: 2, 3: 4, 4: 1, 5: 1, 32: 1}
{0: 4, 1: 2, 2: 4}
{a: 3, b: 2, c: 1}
*/
