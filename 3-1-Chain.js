/*
const chain = (num) => {
  return {
    value: num,
    next: null,
    add(anotherNum) {
      const nestedValue = { value: anotherNum, next: null };
      if (this.next === null) {
        this.next = nestedValue;
      } else if (this.next.next === null) {
        this.next.next = nestedValue;
      } else if (this.next.next.next === null) {
        this.next.next.next = nestedValue;
      }
    },
  };
};
*/
const addLevel = (addedValue) => {
  return b;
};

//Anna's recursive solution
const chain = (value) => {
  return {
    value,
    add: function add(value, level) {
      if (!level) level = this;
      if (!level.next) {
        level.next = { value, next: null };
      } else {
        add(value, level.next);
      }
    },
  };
};

const c = chain(3);
c.add(4);
c.add(5);
c.add(6);
console.log(c);
console.log(c.value); //3
console.log(c.next.value); //4
console.log(c.next.next.value); //5
console.log(c.next.next.next.value); //6
console.log(c.next.next.next.next); //null

// c = {
//    value: 3,
//    next: {
//      value: 4,
//      next: {
//       value: 5,
//       next: {
//         value: 6,
//         next:null,
//       },
//     },
//   },
// };
