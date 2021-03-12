const emitter = require('events').EventEmitter

function myProces(num) {
    var myEvent = new emitter()    
    setTimeout(function () {        
        for (var i = 1; i <= num; i++) {
            myEvent.emit('Before', i)
            console.log('Process No. :' + i);
            myEvent.emit('After', i);
        }
    }, 3000)
    return myEvent;
}

var loopNum = myProces(2);

loopNum.on('Before', function (data) {
    console.log('Before : ' + data)
})

loopNum.on('After', function (data) {
    console.log('Completed.' + data)
})