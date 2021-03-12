const fs = require("fs")

console.log("Write Information to File")
fs.writeFile('myText.txt', 
'NodeJS create by Opensource Fundation',
 function(err) {
   if (err) {
      return console.error(err)
   }   
   console.log("Write Success!")
   console.log("Read Data!")   

   fs.readFile('myText.txt', function (err, data) {
      if (err) {
         return console.error(err)
      }
      console.log("Asynchronous Read: " + data.toString())
   });
});