// Callback Function คือ 
//ฟังก์ชั่นที่ถูกเรียกขึ้นมาทำงานเมื่อมีฟังก์ชั่นหนึ่งทำงานสำเร็จแล้ว 


// 1. ที่ Main Function ต้องมี parameter 
//ที่จะใช้อ้างถึงฟังก์ชั่นที่จะเรียกขึ้นมาทำงาน เรียก callback parameter
// 2. เมื่อ Main Function ทำงานเสร็จแล้ว 
//ทำการเรียก callback parameter มาทำงาน
// 3. สร้าง Callback Function  


function mainFunc(myNum, func) {  
    // func คือ ชื่อของ callback
    myNum += 100
    func(myNum)
}

// ฟังก์ชั่นที่จะถูก Callback
function callBackFunc(value) {
    console.log(value)
}
mainFunc(400, callBackFunc)











