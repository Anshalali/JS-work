// global scope function it can be used to execute a function in global scope and we can use it whole environment of our project
// (global scope function)

var myGlobal = 10;

// this is the global scope function
function fun1() {
    opssGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof opssGlobal != "undefined") {
        output += "opssGlobal: " + opssGlobal;
    }
    console.log(output);
}
fun1();