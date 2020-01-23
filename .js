const logOnNewLine = (...args) => {
    args.forEach(arg => {
        console.log(arg);
    });
};

logOnNewLine('hello', 'pizza', 'goodbye');
/*
    hello
    pizza
    goodbye
*/