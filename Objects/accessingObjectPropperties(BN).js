// accessing object properties with bracket notation it can be used to access object properties but we have must space in property name
// (access object properties with bracket notation)

var testObj = {
    "my food": "pizza",
    "for travel": "bike",
    "the drink": "water",
    "for work": "laptop"
}

var FoodValue = testObj["my food"];
var travelValue = testObj["for travel"];
var drinkValue = testObj["the drink"];
var workValue = testObj["for work"];

console.log(FoodValue, travelValue, drinkValue, workValue)