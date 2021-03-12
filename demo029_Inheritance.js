class SimpleDate {   
    constructor(year, month, date) {
        this.year = year
        this.month = month
        this.date = date
    }
    getShortDate() {
        return `${this.date}/${this.month}/${this.year-543}`
    }
}

class USDate extends SimpleDate {    
    isLeapYear() {
        let y = this.year
        if ((y % 400 == 0) || ((y % 4 == 0) && 
        (y % 100 != 0))) {
            return true
        } 
        return false
    }   
    
    getLongDate() {
        const m = ['January', 'February', 'March',
         'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December']

        return `${this.date} ${m[this.month-1]}
         ${this.year-543}`
    }
    //override
    getShortDate() {
        return `${this.date}-${this.month}-${this.year+543}`
    }
}
const myDate = new USDate(2564, 3, 10)
console.log(myDate.getLongDate())
console.log(myDate.isLeapYear())
console.log(myDate.getShortDate())

const simpleDate = new SimpleDate(2564, 3, 10)
console.log(simpleDate.getShortDate())
//console.log(simpleDate.getLongDate())  
//console.log(simpleDate.isLeapYear())   
