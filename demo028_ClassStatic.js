class Random {
    static getFloat() {
        return Math.random()
    }
    static getInt(min, max) {
        let x = (max - min) + 1
        return min + Math.floor(Math.random() * x)           
    }
    static getBoolean() {
        let r = this.getInt(1, 10)
        return (r >= 5) ? true : false
    }
}

console.log(Random.getFloat())
console.log(Random.getInt(10, 20))
console.log(Random.getBoolean())
