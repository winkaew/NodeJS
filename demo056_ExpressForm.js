const express = require('express')
const app = express()

app.use(express.static('public'));
app.get('./public/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/get', function (req, res) {
   response = {
      code:req.query.code,
      name:req.query.name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(3002, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log('Host is : ', host)
   console.log('Port is : ', port)
})