/*
'fix' finicky so that it randomly fails 50% of the time
*/
const finicky = (val, t) => {
  let evenOrOdd = 0;
  return new Promise((res) => {
    ++evenOrOdd;
    setTimeout(() => {
      if (evenOrOdd % 2 === 0) {
        res(val);
      } else {
        reject(val);
      }
    }, t);
  });
};

const run = async () => {
  try {
    console.log(await finicky('foo', 100));
    console.log('success'); //sometimes this will happen
  } catch (ex) {
    console.log('failure'); //sometimes this will happen
    console.log(ex);
  }
};

run();
