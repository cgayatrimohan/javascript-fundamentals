// Logical "AND" operator
console.log(true && true) //all values have to be TRUE for an expression to be TRUE

//Logical "OR"
console.log(true || false) //any value should be TRUE for the expression to be TRUE

//Example
var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)

//Logical "NOT"
console.log(!true) //will print FALSE
console.log(6 != 10) // will print TRUE

