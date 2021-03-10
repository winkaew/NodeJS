for (i = 10; i >= 1 ; i -= 2){
    console.log(i)
} 
console.log('------------------------------------')

var myString = ''
for (i = 1; i <= 5; i++) {
    myString = ''
    for (j = 1; j <= 10; j++) {
        myString += j + ' '
    }
    console.log(myString)
}

console.log('------------------------------------')

var myString = ''
for (i = 1; i <= 5; i++) {
    myString = ''
    for (j = 1; j <= i; j++) {  		
        myString += j + ' '
    }
    console.log(myString)
}
