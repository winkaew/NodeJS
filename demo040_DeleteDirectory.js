const fs = require("fs")

console.log("Delete Directory Example")

fs.rmdir("/MyDirectory",function(err) {
   if (err) {
      return console.error(err)
   }
   console.log("Deleted Directory")
})