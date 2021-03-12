// Module คือ Package หรือ Library ของ NodeJS 
// ถ้าแอพพลิเคชั่นต้องการใช้งาน Module ใดก็สามารถ download ได้

// เมื่อ download Node มาแล้วเราจะได้ Build-in Module มาส่วนหนึ่ง
// custom module คือ develper สามารถสร้าง Module ขึ้นมาใช้งานเองได้

const os=require('os')  

console.log("Free Memmory: ",os.freemem())
console.log("Home Directory: ",os.homedir())
console.log("Host Name: ",os.hostname())
console.log("Platform : ",os.platform())
console.log("Release : ",os.release())   
console.log("Temp Directory : ",os.tmpdir())  
console.log("Total Memory : ",os.totalmem())  
console.log("OS Type : ",os.type())