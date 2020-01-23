const myLongRunningFn = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (Math.random() < 0.5) {
                resolve('success!');
            } else {
                reject(new Error('failure!'));
            }
        }, 2000);
    });
};

const doWork = () => {
    myLongRunningFn()
        .then(response => {
            console.log(response); // failure!
        });
    };
