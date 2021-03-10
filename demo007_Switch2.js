const prompt = require('prompt-sync')() 
var dayOfWeek = prompt('Enter day of week : ')

switch (dayOfWeek) {
    case 'Monday': case 'Tuesday': case 'Wednesday' :
    case 'Thursday': case 'Friday': console.log('Working Now!!'); break
    case 'Saturday': case 'Sunday': console.log('Weekend Happy!!'); break
    default: console.log('Input not correct !!!')   
}