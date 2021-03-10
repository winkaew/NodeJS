// var คือการประกาศตัวแปรที่มีขอบเขตการทำงานในระดับ function และ 
// global สามารถแก้ไขค่าในตัวแปรได้
// สามารถอ้างอิงหรือใช้งานตัวแปรก่อนการประกาศได้ จะได้ค่าเป็น undefined

var myVar = 500
console.log(myVar)

console.log('------------------------------------');

// Number
// All numbers in JavaScript have the same floating point number type.

var myNum1 = 5
var myNum2 = 10

console.log(myNum1 + myNum2)
console.log(myNum1 / myNum2) 
console.log(myNum1 * myNum2) 
console.log(myNum1 - myNum2) 
console.log(myNum1 % 3)

console.log('------------------------------------')

//Boolean
//Two literals are defined for boolean values: true and false.

var myBool = true
console.log(myBool)

console.log('------------------------------------')

// Boolean operations (&&, ||, !) work as expected:

console.log(true && true)
console.log(true && false)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!false)

console.log('------------------------------------')

function printNum() {
    
    console.log(myResult);  // undefined
    
    for(var i=0 ; i<10; i++) {
        var myResult = `${myResult}, ${i}`;
    }    
    console.log(myResult); 
    console.log(i);
}

printNum();
// i สามารถอ้างถึงการทำงานนอก Loop ได้ เพราะการประกาศด้วย var มีขอบเขตการทำงานในระดับ function
