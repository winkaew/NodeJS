const dns = require('dns')

dns.lookup('www.facebook.com', (err, addresses, family) => {  
  console.log('Addresses :', addresses) 
  console.log('Family :',family)  
})

dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
    console.log(hostname, service)
})


