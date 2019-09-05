const person = {
    name: 'MDT',
    age: 26,
    greet () {
        console.log('My name is ' + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
};

printName(person);

//
