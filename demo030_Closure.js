function print() {
    const course = 'NodeJS Programming'
    // เมื่อมีการเรียกใช้ฟังก์ชั่น Print 
    // จะมีการ return function ออกไป
    return function() {
      console.log(course)
    }
  }

  // ตัวแปร myCourse เป็น ฟังก์ชั่นเพราะมีการกำหนดฟังก์ชั่นใส่เข้าไป 
  const myCourse = print()
  myCourse()
  // เมื่อเรียกฟังก์ชั่น print() แล้วตัวแปรในฟังก์ชั่น อย่าง course ควรจะถูกทำลาย
  // แต่กลับไม่ถูกทำลาย เพราะ myCourse() เรียกใช้งานได้อีก   
  

  // myCourse เป็น closure เพราะเป็นฟังก์ชั่นที่โดนห่อหุ้มด้วยฟังกชั่น
  // closure เป็น Object ที่รวมฟังก์ชันและสภาพแวดล้อมที่ห่อหุ้มมันอยู่ในตอนที่ closure สร้างขึ้นมา
  // ฟังก์ชัน print จะโดนทำลายไปแล้วหลังการเรียกใช้ แต่ตัวแปร name นั้นยังสามารถเข้าถึงได้ เพราะมีฟังก์ชันภายในที่อ้างถึงอยู่
  
   
  
   