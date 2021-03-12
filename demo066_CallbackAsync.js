const myAsync = (callback) => {
    console.log('Start')

    setTimeout(() => {
        const result = callback('Welcome to NodeJS!!')
        console.log(result)
    }, 1000)

    console.log('End')
}

myAsync((message) => {
    return message + ' Async.';
});
