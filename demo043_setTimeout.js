var myMessage = function() {
	console.log('NodeJS Programming!!!')
} 
 
setTimeout(myMessage, 3000)  
console.log('Call Message Test 1')
setTimeout(function() {
	console.log('Call Message Test 2')
}, 5000)
//Arrow Function 
setTimeout(() => {
	console.log('Call Message Test 3')
}, 7000)
