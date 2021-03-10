// const (ES6) คือการประกาศตัวแปรที่มีขอบเขตการทำงานในระดับ block
// ไม่สามารถแก้ไขค่าได้ 
// ไม่สามารถอ้างอิงก่อนการประกาศได้
// กรณีใช้ const กับ object เช่น array, map จะสามารถแก้ไขค่าได้ แต่ไม่สามารถ initial ค่าใหม่ได้

const value = []

value.push(10)
value.push(20)
value.push(30)
value.push(40)
value.push(50)

console.table(value)