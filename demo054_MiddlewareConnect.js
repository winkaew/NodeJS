// Configurable middleware creator
function myMessage(message) {
    return function (req, res, next) {
    res.end(message)
    }
}
let myGreeter = myMessage('Welcome to NodeJS!!!')

const connect = require('connect')
    connect()
    .use('/mesg', myGreeter)
    .listen(3003);

//cmd : curl http://127.0.0.1:3003/mesg