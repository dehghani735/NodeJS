// const person = {
//     name: 'MDT',
//     age: 26,
//     greet : function() {
//         console.log('My name is ' + this.name);
//     }
// }; // or function below

const person = {
    name: 'MDT',
    age: 26,
    greet () {
        console.log('My name is ' + this.name);
    }
};

console.log(person);

person.greet();

// video number 15 Arrays
const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); // this will not change the hobbies itself, makes new array
console.log(hobbies);

// video number 16 Reference Types
const hobbies2 = ['Sports', 'Cooking'];

hobbies2.push('Programming');
console.log(hobbies2);

// video number 17 Spread and Rest operators
const copiedHobbies1 = hobbies.slice();

// spread operator
const copiedHobbies2 = [...hobbies];

const copiedPerson = {...person};

console.log (copiedHobbies1);
console.log (copiedHobbies2);
console.log (copiedPerson);

// rest operator
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
console.log(toArray(1,2,3));

const toArrayRest = (...args) => {
    return args;
};
console.log(toArrayRest(1,2,3,4));