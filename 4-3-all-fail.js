// AllFail resolves if ALL the promises passed to it fail
// write AllFail
// don't worry about the resolved value of AllFail, just know that it only resolves if all the promises fail

const AllFail = (...promises) => {
  // if second argument is truthy, do not resolve the promises
  [...promises].every(promise => {
    i
  })r
  return new Promise((res) => {});
};

const p = (value, resolve = false) => {
  return () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (resolve) {
          return res(value);
        }
        rej(value);
      }, Math.random() * 500);
    });
  };
};

AllFail(p('foo'), p('bar'), p('bazz')).then((res) =>
  console.log('we all failed!')
);

AllFail(p('foo'), p('bar', true), p('bazz')).then((res) =>
  console.log('this will not log!')
);
