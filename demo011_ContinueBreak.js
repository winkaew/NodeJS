const prompt = require('prompt-sync')() 

while (true) {
	x = parseInt(prompt('Please Enter number > 5 : '))
	if (x <= 5) {
		continue
	} else {
		break
	}
}

// continue : วนลูปรอบถัดไปทันที โดยไม่ไปทำคำสั่งที่อยู่ถัดจาก continue

