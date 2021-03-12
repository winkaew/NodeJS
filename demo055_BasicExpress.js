//Express นั้นเป็น Web Framework ของ Node.js
// ที่ได้รับความนิยมตัวหนึ่ง ด้วยความที่มันค่อนข้างง่าย และมีความยืดหยุ่นค่อนข้างสูง สามารถทำได้ทั้งเป็น API หรือนำมาเป็นเว็บ Server

const express = require('express')
const app = express()

app.get('/', function (req, res) {
   res.send('Welcome to ExpressJS !!!')
})

var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log('Host is : ', host)
   console.log('Port is : ', port)
})

// http://127.0.0.1:3001/