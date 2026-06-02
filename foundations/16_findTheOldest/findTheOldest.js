const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestOne = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        const currentOne = getAge(current.yearOfBirth, current.yearOfDeath)

        return oldestOne > currentOne ? oldest : current;
    })
}

const getAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear(); // Automatically grabs the current year
    }
    return death - birth;
}


// Do not edit below this line
module.exports = findTheOldest;
