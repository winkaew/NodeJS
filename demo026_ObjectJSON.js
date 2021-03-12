let person = {
	"name": "Adam Sander",
	"age": 30,
	"married": true,
	"children": ["Byran", "Jane", "Polly"],
	"website": null,
	"cars": {
		"sedan": "BMW",
		"suv": ["Honda", "Toyota"],
		"pickup": "Isuzu",
	}
}

console.log(person.name)
console.log(person['age'])

console.log(person.children[0])
console.log(person.children[1])
console.log(person.children[2])

console.log(person.cars.suv[0])
