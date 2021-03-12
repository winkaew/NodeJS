const fs = require("fs")

var data = 'Create by Opensource Foundation.'

var writerStream = 
fs.createWriteStream('output.txt')
writerStream.write(data,'UTF8')

writerStream.end()   // End of File

// เหตุการณ์นี้จะเริ่มทำงานเมื่อข้อมูลทั้งหมดถูกล้างไปที่ระบบพื้นฐาน
writerStream.on('finish', function() {
   console.log("Write Stream Completed.")
});
writerStream.on('error', function(err) {
   console.log(err.stack)
});
console.log("End of Write Stream")