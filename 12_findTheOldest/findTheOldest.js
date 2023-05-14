const findTheOldest = function(people) {
    let allAges = [];

    const assignAge = function(person) {
        let personAge = 0;

        if (Object.hasOwn(person, 'yearOfDeath')) {
            personAge = (person.yearOfDeath - person.yearOfBirth);
        } else {
            const date = new Date();
            const currentYear = date.getFullYear();
            personAge = (currentYear - person.yearOfBirth);
        };

        person.age = personAge;
    };

    people.forEach(assignAge);

    let oldestAge = 0;
    let oldestPerson = undefined;

    const getOldest = function(person) {
        if (person.age > oldestAge) {
            oldestAge = person.age;
            oldestPerson = person;
        }
    }

    people.forEach(getOldest);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
