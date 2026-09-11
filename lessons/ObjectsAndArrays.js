//Objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    car: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer)

//Dot Notation
console.log(customer.firstName) //Only firstName will be printed
console.log(customer['lastName']) //another way of retrieving the object elements

//Bracket Notation
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`) //another way of retrieving the object elements


//Arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
console.log(car[1])
console.log(car)

//Replace an element in array
car[1] = "BMW"
console.log(car)

//From object you can access the array elements
console.log(customer.car[0])