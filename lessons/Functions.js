//Functions -> Organize the code for reusability


// 1. Declarative function
function helloOne() {
    console.log("Hello One!")
}

helloOne() //invoking the function

// 2.Anonymous Function
var helloTwo = function() {
    console.log("Hello Two!")
}
helloTwo()

//Difference b/w decalarative and anonymous -> cannot call anonymous before declaring

// 3.ES6 Function syntax or Arrow function
var helloThree = () => {
    console.log("Hello Three!")
}
helloThree()


// Function with arguments
function printName(firstName, lastName) {
    console.log(firstName, lastName)
}
printName("John", "Smith")


//Function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var result = multiplyByTwo(15)
console.log(result)

//import functions
import { printAge } from '../helpers/printHelpers.js'
printAge(2)


//import everything
import * as helper from '../helpers/printHelpers.js'
helper.printAge(5)