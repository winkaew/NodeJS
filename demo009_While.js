const prompt = require('prompt-sync')() 

var checkPassword = false
var inputPassword = ''

//checkPassword is false : next loop
while (!checkPassword) {  		             
	inputPassword = prompt('Please Enter Password : ')
	if (inputPassword == 'admin') {
		checkPassword = true  	
	}
	//if inputPassword = admin change checkPassword : true 						
}
console.log('Password Correct !!!')

