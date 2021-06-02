const damper = (fn, delay) => {
  let running = false;
  return (...args) => {
    if (!running) {
      running = true;
      setTimeout(() => {
        running = false;
      }, delay);
      return fn(...args);
    }
  };
};

const fn = (a, b) => `${a} ${b}`;

const damped = damper(fn, 500);

console.log(damped('hello', 'world')); //will print hello world

console.log(damped('hello', 'world')); //will not run, because 500ms has not passed since it was last run - prints undefined

setTimeout(() => {
  console.log(damped('hello', 'world')); //will not run because 500ms has not passed since it was run- prints undefined
}, 300);

setTimeout(() => {
  console.log(damped('I', 'ran')); //600ms have passed, will print 'I ran'
}, 600);
