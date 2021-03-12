const fs = require("fs")
console.log("File Information")

fs.stat('myText.txt', function (err, stats) {
   if (err) {
      return console.error(err)
   }
   console.log(stats);
   console.log("Success")
   console.log("isFile ? " + stats.isFile())
   console.log("isDirectory ? " + stats.isDirectory())   
})