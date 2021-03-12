const crypto = require('crypto') 

const secret = 'key'  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Pa$$w0rd')  
                   .digest('hex')  
console.log(hash) 