/*
Bob and Sally Normal have lost their kids at EVERYTHING-R-US during a black friday blow out sale!
Help them find BILLY and REBECCA NORMAL by writing a recursive function thats takes the name of the department store and one of their names.
The function should return directions to find the chosen kid in the form of an array starting with the department name and ending with their name.


loop through the keys
create a variable for location
push key to location
base case: if person matches name, return location
recursive case: if value is an object, return function
*/

/*
const searchStore = (department, person) => {
  //loop through depts
  let location = [];
  for (let key in department) {
    // base case
    if (department.PERSON === person) {
      location.push(person);
      return location;
    }
    // recursive case
    else if (typeof department[key] === 'object') {
      location.push(key);
      return location.concat(searchStore(department[key], person));
    }
  }
  return null;
};
*/

const searchStore = (storeObj, person) => {
  //loop thorugh depts
  let location = [];
  for (let dept in storeObj) {
    //basecase
    if (storeObj[dept] === person) {
      location.push(person);
      return location;
    }
    //recursive case
    if (typeof storeObj[dept] === 'object') {
      const nextObj = storeObj[dept];
      location.push(dept);
      return location.concat(searchStore(nextObj, person));
    }
  }
};

const EVERYTHINGRUS = {
  SPORT: {
    'aisle 1': {
      PERSON: 'Arwinder Singh',
      BASEBALL: {
        PERSON: 'Steve Hunter',
        PERSON: 'BILLY NORMAL',
      },
    },
    'aisle 2': {
      BASKETBALLL: {
        PERSON: 'Vanessa Lima',
        PERSON: 'Vincent Kuperavage',
      },
      HOCKEY: {},
    },
    'aisle 3': {
      PERSON: 'Samir Jain',
      PERSON: 'Serena Jiao',
    },
  },
  COSMETICS: {
    'aisle 5': {
      PERSON: 'Luisa Zhou',
      SHAMPOO: {
        PERSON: 'Matthew Sze',
      },
    },
    'aisle 6': {
      PERSON: 'Kestrel Gorlick',
      MOISTURIZER: {
        PERSON: 'Kokko Tso',
      },
    },
  },
  ELECTRONICS: {
    'aisle 7': {
      PERSON: 'karandeep multani',
      TV: {
        PERSON: 'Kate Quinn',
        PERSON: 'Kayla Frankum',
      },
    },
    'aisle 8': {
      PERSON: 'Jason Williams',
      ROOMBA: {
        PERSON: 'Taylor McKeel',
      },
    },
  },
  PRODUCE: {
    'aisle 9': {
      NUTS: {
        BRAZIL: {
          PERSON: 'Jacob Goldstein',
        },
        WALNUT: {
          PERSON: 'Dean Jarrett',
        },
        PECAN: {
          PERSON: 'Devyani Agarwal',
        },
      },
      PERSON: 'Jared Suresky',
    },
    'aisle 10': {},
  },
  CLOTHING: {
    'aisle 11': {
      PERSON: 'Roman Shteynberg',
      PERSON: 'Rommel Demano',
    },
    'aisle 12': {
      JEANS: {
        JNCOS: {
          PERSON: 'Monil Goklani',
          PERSON: 'Parth Patel',
        },
        JEGGINGS: {
          HIGHWAISTED: {
            PERSON: 'Michael Rios',
          },
          HIGHWATER: {
            PERSON: 'REBECCA NORMAL',
          },
        },
      },
    },
  },
};
console.log(searchStore(EVERYTHINGRUS, 'BILLY NORMAL'));
// OUTPUT:==> [ 'SPORT', 'aisle 1', 'BASEBALL', 'BILLY NORMAL' ]

console.log(searchStore(EVERYTHINGRUS, 'REBECCA NORMAL'));
// OUTPUT: [ 'CLOTHING', 'aisle 12', 'JEANS', 'JEGGINGS', 'HIGHWATER', 'REBECCA NORMAL']
