class EDate { 
    constructor(year, month, date) {
        this.year = year
        this.month = month
        this.date = date
    }
    getShotDate() {
        return `${this.date}/${this.month}/${this.year-543}`
    }
    getLongDate() {
        const m = ['January', 'February', 'March', 'April', 
                    'May', 'June', 'July', 'August', 
                    'September', 'October', 'November', 
                    'December']

        return `${this.date} ${m[this.month-1]}
         ${this.year-543}`
    }
}

const myDate = new EDate(2564, 3, 11)

console.log(myDate.getShotDate())
console.log(myDate.getLongDate())