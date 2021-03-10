function SumNumber(...mynums) {
    var sum = 0

    for (i=0; i < mynums.length; i++){
        sum += mynums[i]
    }
    return sum
}
var result = SumNumber(10,20,30,40)
console.log('Result is :' + result)

var resultArr1 = SumNumber([10,20,30,40,50])
console.log('Result Array 1 is :' + resultArr1)

//Spread Operator
var resultArr2 = SumNumber(...[10,20,30,40,50])
console.log('Result Array 2 is :' + resultArr2)