// loop over people array & create a new object
// map over result array with pet information

const peopleAndPets = (pets, people, ownerships) => {
  people.forEach((person) => {
    person.pet = []; //need to access ownership id to access petId
  });
  return people;
};
