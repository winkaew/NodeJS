// Recursion คือ การสั่งให้ Function 
// เรียกตัวเองขึ้นมาทำงานซ้ำ จนกว่าจะได้ผลลัพธ์ที่ต้องการ

const prompt = require('prompt-sync')()

function myOption() {
	console.log('\nPlease Enter Option')	
	let option = prompt('1: Continue,  2: Exit, 3: Help :')
	
	option = parseInt(option)
 	if (Number.isInteger(option)) {
		if (option >= 1 && option <= 3) {
			return option
		} else {
			myOption()		//Recursion
		}
	} else {
		myOption()			//Recursion
	}
}

myOption()



