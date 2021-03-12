const myProm = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({id:1,"course":"NodeJS Programming!!!"})
        reject(new Error('Bad Request!!!'))
    }, 2000)
})

console.log('Before')

myProm.then(function(result){
    console.log('Result : ', result)
})
.catch(function(err){
    console.log(err.message)
})

console.log('After!!')

