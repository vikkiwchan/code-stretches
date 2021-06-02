const process = (...args) => {
  return new Promise((res) => {
    const results = [];
    let count = 0;
    args.forEach(async (arg, idx) => {
      try {
        results.push(await arg());
      } catch (ex) {
        const errorMsg = { error: arg };
        results.push(errorMsg);
      }
    });
    return results;
  });
};

const p1 = () => Promise.resolve('foo');
const p2 = () => Promise.reject('bar');
const p3 = () => Promise.reject('bazz');
const p4 = () => Promise.resolve('quq');

const run = async () => {
  const results = await process(p1, p2, p3, p4);
  console.log(results); //[ 'foo', { error: 'bar' }, { error: 'bazz' }, 'quq' ]
};
run();
