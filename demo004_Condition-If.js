const prompt = require('prompt-sync')() 

var myNum1 = parseFloat(prompt('Number 1 : '))
var myNum2 = parseFloat(prompt('Number 2 : '))
var myNum3 = parseFloat(prompt('Number 3 : '))		
var maxValue = myNum1				

if (myNum2 > maxValue) {
	maxValue = myNum2				
}
if (myNum3 > maxValue) {
	maxValue = myNum3				
}
console.log('Maximum Value is : ' + maxValue)
