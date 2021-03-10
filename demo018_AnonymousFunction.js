// AnonymousFunction คือ ฟังก์ชั่นที่ไม่มีการระบุชื่อ 
// โดยจะทำการระบุฟังก์ชั่นให้กับตัวแปร
var greetingFunc = function(){
    console.log('Welcome to NodeJS Programming')
}
// isFinite เป็นฟังก์ชันที่ตรวจสอบว่าค่าตัวเลขนั้นเป็นจำนวนจำกัดหรือไม่ 
//ถ้าค่าเป็น Infinity หรือ -Infinity หรือ NaN ก็จะได้ false
var sqr = function(myNum){
    if (isFinite(myNum)) {
        return myNum ** 2
    }
}

var repeatString = function(str, times, separator=''){
    if (!Number.isInteger(times)) {
        return
    }
    for (i=0; i < times; i++){
        console.log(str + separator)
    }
}

greetingFunc()
console.log(sqr(10))
repeatString('NodeJS', 5)


