const doWork = async () => {
    try {
        const response = await myLongRunningFn();
        console.log(response); //success!
    } catch (error) {
        console.log(error.message); // failure
    }
};
