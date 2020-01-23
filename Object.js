let info = {
    greeting: 'Hello!',
    age: 100,
    helpful: true,
    favoriteFoods: ['pizza', 'tacos'],
    name: {
        first: 'John',
        last: 'Doe',
    },
    homeTown: undefined,
    favoriteCar: null,
};

info.greeting; // 'Hello!';
info[ 'greeting']; // 'Hello!'
info.name; // {first: 'John', last; 'Doe' }
info.helpful; // true
info.helpful = false;
info.helpful; // false
