const fs = require("fs")

console.log("Read Directory Example")
fs.readdir("/MyDirectory",function(err, files) {
   if (err) {
      return console.error(err)
   }
   files.forEach( function (file) {
      console.log( file )
   })
})