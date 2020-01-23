const firstName = 'James';
const lastName = 'Bond';

const legacyGreeting =
    'The name is ' + lastName + ', ' + firstName+ ' ' + lastName;
const greeting = `The name is ${lastName}, ${firstName} ${lastName}`;

console.log(legacyGreeting); // The name is bond, James bond
console.log(greeting); // The name is bond, James Bond
