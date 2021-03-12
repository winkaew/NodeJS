const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('paramEvent', function(args){
    console.log('Event Parameter is : ', args)
})

emitter.emit('paramEvent', 'React')
emitter.emit('paramEvent', {id:1, course:'NodeJS'})
emitter.emit('paramEvent', ['Angular', 'React', 'Vue'])