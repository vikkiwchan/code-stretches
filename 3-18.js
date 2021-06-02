/*
write the delay function
delay takes a time in ms
it returns a function which can be called with some data
that function retuns a promise which will take t ms to resolve
*/

const delay = (ms) => {
  return async (data) => {
    await setTimeout(function () {
      return data;
    }, ms);
  };
};

const d1 = delay(100);
const d2 = delay(200);

const run = async () => {
  const d = new Date();
  console.log(await d1('hello'));
  console.log(new Date() - d);
  console.log(await d1('world'));
  console.log(new Date() - d);
  console.log(await d2('!!!'));
  console.log(new Date() - d);
};
/* approximate output
hello
101
world
202
!!!
403
*/

run();

/* SOLUTION - MATT
const delay = (msec) => {
  return (data) => {
    return new Promise((res) => {
      setTimeout(() => res(data), msec);
    });
  }
};
*/
