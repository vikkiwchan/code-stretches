/*
Help modernize Dante's internal administrative systems by
writing a function that takes Dante's internal database and
a designated circle of hell. This function should return the
local residents from the circle specified.
*/

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

const dantesLookup = (DantesInferno, targetCircle) => {
  //basecase
  if (DantesInferno.circle === targetCircle) {
    return DantesInferno.people;
  }
  //recursive case
  if (typeof DantesInferno.level === 'object') {
    const obj = DantesInferno.level;
    return dantesLookup(obj, targetCircle);
  }
};
