// global variables
const name = 'MDT';
let age = 26;
const hasHobbies = true;

// hasHobbies = false; got an error

age = 27;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
// }

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
};

const add = (a, b) => {
    return a + b;
};

const addOne = a => a + 1;

const addRandom = () => 1 + 2;

console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));