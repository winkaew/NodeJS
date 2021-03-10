function isLeapYear(year) {
    if ((year > 0) && (year < 10000) && Number.isInteger(year)) {
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
        {
            return true
        } else {
            return false
        }
    } else {
        return
    }
}

console.log('Leap Year: ' + isLeapYear(2000))
console.log('Leap Year: ' + isLeapYear(1995))
console.log('Leap Year: ' + isLeapYear(10000))