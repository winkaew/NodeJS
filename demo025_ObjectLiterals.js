var myObj1 = {}
console.log(myObj1) 
console.log('------------------------------------')

myObj1.id = 100       // extend myObj1
console.log(myObj1) 
console.log('------------------------------------')

var myObj2 = {
    id: 200
}
console.log(myObj2) 
console.log('------------------------------------')

//You can additionally nest object literals inside object literals
var myObj3 = {
    id: 300,
    key: {
        value1: 'Welcome to JavaScript',
        value2: 1000
    }
};
console.log(myObj3)
console.log('------------------------------------')

//you can have arrays inside object literals
var myObj4 = {
    id: 400,
    key: [10, 20, 30, 40, 50]
};
console.log(myObj4);
console.log('------------------------------------')

// you can also have these arrays themselves contain object literals

var myObj5 = {
    id: 500,
    key:[{value: 10},{value: 20},{value: 30}]
};

console.log(myObj5.id)
console.log(myObj5.key)
console.log('------------------------------------')
console.log(myObj5.key[0].value)
console.log(myObj5.key[1].value)
console.log(myObj5.key[2].value)
