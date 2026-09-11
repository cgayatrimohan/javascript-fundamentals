//Loops -> when you want to repeat the operation multiple times

//for loop (for i loop)
for(let i = 0; i < 5; i++) {
    console.log("Hello World! " + i)
}

//Example
var cars = ["Volvo", "Toyota", "Tesla"]

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

// Using FOR OF LOOP
for(let car of cars) {
    console.log(car)
    if(car == "Toyota") {
        break
    }
}


//ES6 Syntax for "for each loop"
cars.forEach( car => {
    console.log(car)
})
