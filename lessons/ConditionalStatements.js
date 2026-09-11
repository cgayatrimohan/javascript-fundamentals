//Conditional Statement

// if(condition) {
//     //execute some code here
// } else {
//     //execute some code here
// }

//Example - If hour b/w 6 & 12 print "Good morning"
//if hour b/w 12 & 18 print "Good afternoon"
// Otherwise: Good evening

var hour = 20

if(hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if(hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}


//Example from previous can be written using conditional statement
var ageIsMoreThanEighteen = false
var isUSCitizen = true

if(ageIsMoreThanEighteen && isUSCitizen) {
    console.log("Cutsomer is eligible for DL")
} else {
    console.log("Customer is NOT eligible for DL")
}
