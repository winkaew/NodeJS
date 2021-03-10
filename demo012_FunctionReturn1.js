function addNumber(num1,num2 = 10){      //Default Parameter
    console.log('First number is :',num1)
    console.log('Second number is :',num2)
    return num1+num2;
 }

 console.log("Summary 1:",addNumber(20))
 console.log("Summary 2:",addNumber(50,70)) 
 console.log("Summary 3:",addNumber())
  //NaN คือ Not a Number หมายถึงไม่สามารถคำนวนค่าทางคณิตศาสตร์ได้ (Error Number)

console.log("Summary 4:",addNumber(50,null))
 // null คือ No Object หรือ Empty Object หมายถึง ไม่สามารถอ้างอิงถึง Object นั้นได้
console.log("Summary 5:",addNumber(100,undefined))
// undefined คือ No Value หรือการไม่ได้กำหนดค่าให้กับตัวแปร 

 
 