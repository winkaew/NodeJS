let time = 10
console.log('Time :')
let myinterval = () => {
	if (time > 0) {
		console.log(time)
		time--
	} else {
        console.log('Timeout !!!') 
		process.exit(1)        	    
	}
}
setInterval(myinterval, 1000)


