const fs = require("fs")
var data = ''

var readerStream = 
fs.createReadStream('myData.txt')
// Set the encoding
readerStream.setEncoding('UTF8')

// Stream Events
// data : เหตุการณ์นี้จะเริ่มทำงานเมื่อมีข้อมูลพร้อมให้อ่าน
// end : เหตุการณ์นี้จะเริ่มทำงานเมื่อไม่มีข้อมูลให้อ่านอีกต่อไป 
// error : เหตุการณ์นี้จะเริ่มทำงานเมื่อมีข้อผิดพลาดในการรับหรือเขียนข้อมูล 
readerStream.on('data', function(text) {
   data += text
});
readerStream.on('end',function() {
   console.log(data)
});
readerStream.on('error', function(err) {
   console.log(err.stack)
});
console.log("Read Stream success.")