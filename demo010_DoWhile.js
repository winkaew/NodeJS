// Do While จะมีการทำคำสั่งภายใน Block อย่างน้อย 1 ครั้ง 

const prompt = require('prompt-sync')() 

var myNum = parseInt(Math.random() * 10)

const maxPredict = 5

var winStatus = false			
var count = 1			
var predictNo			
var message = ''		
var input = ''			

do {
	input = prompt(`Predict No. : ${count} Please Enter Number [0-10] : `)
	predictNo = parseInt(input)
			
	if (predictNo > myNum) {
		message= 'Less'
	} else if (predictNo < myNum) {
		message = 'Over'
	} else if (predictNo == myNum) {
		message = 'Correct Number'
		win = true
	} else {
		message = 'Please Enter 0-10'
	}
	console.log(message + '\n')

	if (count == maxPredict) {
		console.log('Game Over !!!')
		break
	}			
	count++	

} while (!winStatus)
