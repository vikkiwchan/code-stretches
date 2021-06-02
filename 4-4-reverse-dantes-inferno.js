// Dante has decided he got the whole thing backwards.
// Write a function that takes Dante's Inferno and reverses it.

const DantesInferno = {
  circle: 'Limbo',
  people: ['Sally'],
  level: {
    circle: 'Lust',
    people: ['Jeffery', 'Megan'],
    level: {
      circle: 'Gluttony',
      people: ['Marty'],
      level: {
        circle: 'Avarice',
        people: ['Rebecca'],
        level: {
          circle: 'Wraith',
          people: ['Steven', 'Rick'],
          level: {
            circle: 'Heresy',
            people: ['Morgan', 'Sarah', 'Rachel'],
            level: {
              circle: 'Violence',
              people: ['Timothy'],
              level: {
                circle: 'Fraud',
                people: ['Tod'],
                level: {
                  circle: 'Treachery',
                  people: ['Alex', 'Oliver'],
                },
              },
            },
          },
        },
      },
    },
  },
};

function ReverseDantesInferno(DantesInferno) {
  let reverseObj = { level: {} };
  // base case - if you reach an object that doensnt have a level property, return the reverse obj
  if (!('level' in DantesInferno)) {
    return reverseObj;
  } else if (typeof DantesInferno.level === 'object') {
    const obj = { circle: DantesInferno.circle, people: DantesInferno.people };
    let { level } = reverseObj;
    return ReverseDantesInferno(DantesInferno.level);
  }
  // if level is an object return function itself
}

console.log(ReverseDantesInferno(DantesInferno));
