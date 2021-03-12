const fs = require("fs");

var readerStream = 
fs.createReadStream('myData.txt');
var writerStream = 
fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log("Piping Stram Success.");