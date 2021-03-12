const fs = require("fs")

console.log("Delete File")
fs.unlink('myText.txt', function(err) {
   if (err) {
      return console.error(err)
   }
   console.log("File Deleted!")
});