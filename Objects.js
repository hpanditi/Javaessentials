const example0bj = {
    greeting: 'hello',
    farewell: 'goodbye',
    favoriteFood: 'pizza',
};

const person1 = {
    ...example0bj,
    greeting: 'hi',
};

console.log(person1); // { greeting: 'hi', farewell: 'goodbye', favoriteFood: 'pizza' }
