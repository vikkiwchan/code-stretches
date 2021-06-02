/*
note the delay function produces a method which can both resolve or reject after a delay
passing true as second parameter to the method, causes a delayed rejection
the All method does not handle rejections
modify the All method so that your console.log in the run method displays the appropriate result
*/

const All = (...args) => {
  return new Promise((res, rej) => {
    let count = 0;
    const results = [];
    args.forEach(async (p, idx) => {
      try {
        if (rej) {
          results[idx] = await p;
          if (++count === args.length) {
            res(results);
          }
        }
      } catch (err) {
        console.error(error);
      }
    });
  });
};

//allows user to set up delays
//which can resolve or reject
const delay = (t) => {
  return (word, rejectMe) => {
    return new Promise((res, rej) => {
      setTimeout(() => (rejectMe ? rej(word) : res(word)), t);
    });
  };
};

const d100 = delay(100);
const d150 = delay(150);
const d200 = delay(200);

const run = async () => {
  try {
    await All(d100('foo'), d200('bar', true), d150('bazz'));
  } catch (ex) {
    console.log(ex); //bar
  }
};
run();
