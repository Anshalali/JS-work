// global vs local function it can be used to store a function
// global vs local scope in functions

// this is the global scope
var myVar = 10;

// this is the local scope
function myLocal() {
    var myVar = 15;

    return myVar;
}

console.log(myLocal())
console.log(myVar)