// ArrowFunction =>   :  Lambda Expression
// Function (AnonymousFunction)

var addNumber = (num1, num2) => num1 + num2
console.log(addNumber(30,30))

var subNumber = (num1, num2) => num1 - num2
console.log(subNumber(20,10))

var mulNumber = (num1, num2) => num1 * num2
console.log(mulNumber(5,10))

const isEven = (num1) => {
    if(num1%2 == 0)
       return true
    else
       return false
 }
 console.log(isEven(10))