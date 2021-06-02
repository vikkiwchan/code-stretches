/*
B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.
*/

const btownbake = (recipe, supplies) => {
  let qty = [];
  for (let key in recipe) {
    supplies[key]
      ? qty.push(Math.floor(supplies[key] / recipe[key]))
      : qty.push(0);
  }
  return Math.min(...qty);
};

console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>2
console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 3000, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>5
console.log(
  btownbake(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 400, sugar: 1200, eggs: 5, milk: 200 }
  )
); //=>0
