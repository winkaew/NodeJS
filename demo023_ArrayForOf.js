var th = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 
              'หก', 'เจ็ด', 'แปด', 'เก้า']

var en = ['zero', 'one', 'two', 'three', 'four', 'five', 
            'six', 'seven', 'eight', 'nine']	

const prompt = require('prompt-sync')()

var ThaiWord = ''
var EngWord = ''		
var strNum = prompt('Please Enter Number : ')

for (myDigit of strNum) {
	ThaiWord += th[myDigit]
    EngWord += en[myDigit]
}		

console.log('Thai : ' + ThaiWord)
console.log('English : ' + EngWord)
