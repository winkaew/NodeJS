//Event คือเหตุการณ์ที่เกิดขึ้นในระหว่างใช้งานแอพพลิเคชั่น
// ทำการ Load Modules event จะได้คลาส EventEmitter
// ต้องทำการสร้าง Object จากคลาส EventEmitter 

const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

// .addListener เป็นเมธอดสำหรับกำหนด Event Listener
// เป็นการเพิ่ม Event ให้ Object เป็นการสร้าง Event ล่วงหน้า
myEventEmitter.addListener('printEvent', function(args){
    console.log('This is Print Events !!!')
})

// .emit สั่งให้เกิดเหตุการณ์ที่กำหนด
myEventEmitter.emit('printEvent')
