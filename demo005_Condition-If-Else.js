/*
KB = 1,024
MB = 1,048,576
GB = 1,073,741,824
TB = 1,099,511,627,776
*/

const prompt = require('prompt-sync')() 
let fileSize = parseFloat(prompt('Please Enter File Size : '))
var fileUnit	                  // fileUnit = undefined 

if (fileSize >= 1099511627776) {  		// /- คือ Division Unit
	fileSize /= 1099511627776
	fileUnit = "TB"
} else if (fileSize >= 1073741824) {  	
	fileSize /= 1073741824
	fileUnit = "GB"
} else if (fileSize >= 1048576) {  		
	fileSize /= 1048576
	fileUnit = "MB"
} else if (fileSize >= 1024) {   		
	fileSize /= 1024
	fileUnit = "KB"
} else {      						
	fileUnit = "Byte"
}

console.log(`File Unit is : ${fileSize.toFixed(2)} ${fileUnit}`)
