const fs = require("fs")

// Synchronous Read
// ต้องทำการอ่านไฟล์ให้เสร็จก่อนจึงจะทำคำสั่งถัดไปได้
// ซึ่งถ้าไฟล์มีขนาดใหญ่ก็ต้องใช้เวลาในการอ่านนาน
var data = fs.readFileSync('myText.txt')
console.log("Synchronous read: " + data.toString())
console.log("Synchronous Ended")
// การทำงานในลำดับถัดไปอาจไม่สนใจว่าต้องอ่านไฟล์เสร็จก่อนก็ได้
// Asynchronous Read
fs.readFile('myText.txt', function (err, data) {
    if (err) {
       return console.error(err)
    }
    console.log("Asynchronous read: " + data.toString())
    console.log("Asynchronous Ended")
 })