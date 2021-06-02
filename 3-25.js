const p1 = (y) => Promise.resolve(y);
const p2 = (x) => Promise.resolve(3 * x);

const run = async () => {
  const ten = await p1(10);
  const thirty = await p2(ten);
  console.log(thirty);
};
run();

const p1 = new Promise.resolve(y);
const p2 = new Promise.resolve(3 * x);

const run = () => {
  const ten = p1.then();
  const thirty = p2.then((3 * x) => {
    console.log(thirty);
  });
};
