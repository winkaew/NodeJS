const math = require('./demo041_ExportModule')

let mysum = math.sum(...[5, 10, 15, 20])
console.log(mysum)
let myrandom = new math.Random()
console.log(myrandom.getInteger(10, 100))
console.log(math.number.format(5500345))
