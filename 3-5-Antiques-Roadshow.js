const antiqueData = {
  day1: {
    'Bruce Parker': {
      'Brock Funkhouser': {
        'Richard Dadd painting': 100000,
      },
      'Chasidy Dean': {
        'Silver Bull Head': 150000,
      },
      'Daron Sanches': {
        'Geoffrey Munn': {
          'Art Deco bracelet': 150000,
          'John Lavery painting': 1200000,
          'Gold Leica': 320000,
        },
      },
    },
    'Angela Rippon': {
      '18th Century Dolls House': 190000,
    },
  },
  day2: {
    'Arthur Negus': {
      'Merrill Burgher': {
        'bronze racehorse': 250000,
        'apothecary desk': 500000,
      },
      'Zona Cornell': {
        'Beatrix Potter paintings': 10,
        'Painting by William Orpen': 30000,
        jacket: {
          'john F Kennedy’s jacket': 275000,
        },
      },
    },
  },
  day3: {
    'Hugh Scully': {
      '18th-century sword': 20000,
      'Karly Strasburg': {},
    },
    'Michael Aspel': {
      'Alma Tadema portrait': 34000,
    },
  },
  day4: {
    'Van Dyck painting': 400000,
  },
};

// This is going to be a recursive problem
// set up a variable for the max value [ 'name', price]
// base case: if there are no more keys in the object - perhaps object keys could be used? return max value
// recursive case: if the value is an object, loop through it again
// solution reference: FSA search party problem https://youtu.be/x1v79YPCpW0?t=438

const findBestEstimate = (obj) => {
  //most expensive item
  let maxValue = ['something', 0];
  // loop through days of antique show
  for (let key in obj) {
    let value = obj[key];
    // BASE CASE
    // if value is not an object, compare it to the maxValue
    if (typeof value === 'number') {
      if (value > maxValue[1]) {
        maxValue = [key, value];
      }
      // RECURSIVE CASE
    } else if (typeof value === 'object') {
      let nextValue = findBestEstimate(value);
      if (nextValue[1] > maxValue[1]) {
        maxValue = nextValue;
      }
    }
  }
  return maxValue;
};

console.log(findBestEstimate(antiqueData)); //==> [ 'John Lavery painting', 1200000 ]
