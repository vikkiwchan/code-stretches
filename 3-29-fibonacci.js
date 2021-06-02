/*
 write a function, fibonacci, that takes an integer >= 0. // fibonacci formula: fibonacci(n) = fibonacci(n - 1) + fibonacci(n -2) // initial conditions: fibonacci(0) = 0; fibonacci(1) = 1

try for a recursive implementation, then an interative solution.

[0,1,1,2,3,5,8,13 ...]
*/

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// const fibonacci = (n) => {
//   let arr = [0, 1];
//   for (let i = 0; i < n - 1; i++) {
//     arr.push(arr[i] + arr[i + 1]);
//   }
//   return arr[n];
// };

console.log(fibonacci(20));
