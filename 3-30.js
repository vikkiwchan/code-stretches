/*
- last receives any number of promises
- returns the 'last' promise to resolve (the one that takes the longest)
- if none of the promises resolve, it does nothing

const Last = (...promises)=> {

};

//generates a promise with a delay which can resolve or reject

const p = (val, t, shouldReject = false) => {
  return new Promise((res, rej)=>{
    setTimeout(()=> {
      if(shouldReject){
        return rej(val)
      }
      res(val);
    }, t);
  });
};

Last(p('foo', 100, true),p('bar', 200, true))
  .then(result=> console.log(result));//nothing

Last(p('foo', 500),p('bar', 20), p('bazz', 200), p('quq', 700, true))
  .then(result=> console.log(result));//should log 'foo' because it's the last promise to resolve

Last(p('foo', 500),p('bar', 20), p('bazz', 200), p('quq', 700))
  .then(result=> console.log(result));//should log 'quq' notice quq is no longer being rejected
*/