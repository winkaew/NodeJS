// concat()

var string = ["Liverpool", "Manchester", 
"London"]
var numeric = [20, 10, 30]
var result = string.concat(numeric)
console.log("Result 1 : " + result)

console.log('------------------------------------');

//filter()

function myStatus(element) { 
    return (element >= 100) 
} 

var passed = [11, 55, 875, 2000, 150].filter(myStatus) 
console.log("Result 2 : " + passed) 

console.log('------------------------------------')

//forEach()

var myNum = new Array(100, 200, 300, 400, 500)  
console.log("Original Array : ")  

myNum.forEach(function(val) { 
   console.log(val) 
}) 

//reverse() 
myNum.reverse()  
console.log("Reversed Array : ")  

myNum.forEach(function(val){ 
   console.log(val) 
})

console.log('------------------------------------')

//indexOf()

var index = [20, 40, 60, 80, 100].indexOf(80) 
console.log("index is : " + index ) 
console.log('------------------------------------')

//join()
var arr = new Array("NodeJS", "React", "Angular") 
var str = arr.join()
console.log("str : " + str )  

var str = arr.join(" * ")
console.log("str : " + str ) 

var str = arr.join(" / ") 
console.log("str : " + str )
console.log('------------------------------------')

//map()


var myNum = [1, 4, 9]; 
var roots = myNum.map(Math.sqrt); 
console.log("roots is : " + roots );

console.log('------------------------------------')