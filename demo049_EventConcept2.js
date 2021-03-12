const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('callMessageEvent', function(args){
    console.log('.on is EventListener')
})

emitter.emit('callMessageEvent')