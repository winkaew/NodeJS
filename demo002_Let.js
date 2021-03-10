// let (ES6) คือการประกาศตัวแปรที่มีขอบเขตการทำงานในระดับ block แก้ไขค่าได้ 
// ไม่สามารถอ้างอิงก่อนการประกาศได้

function printNum() {
    for(let i=0; i<10; i++) {
        let myResult = i;
    }
    console.log(myResult);   // is not defined
    console.log(i);          // is not defined
}

printNum();
console.log('------------------------------------');

