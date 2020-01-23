let userInfo= { questionNicely: false};

let question = userInfo.questionNicely
    ? 'what would you like to drink?'
    : 'Whatya want, punk?!';
console.log(question); // Whatya want, punk?!

userInfo.questionNicely = true;
question = userInfo.questionNicely
    ? 'What would you like to drink?'
    : 'Whatya want, punk?!';
console.log(question); // What would you like to drink?
