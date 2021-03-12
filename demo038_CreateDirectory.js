const fs = require("fs")
console.log("Create Directory Example")
fs.mkdir('/MyDirectory',function(err) {
   if (err) {
      return console.error(err)
   }
   console.log("Directory created!")
})