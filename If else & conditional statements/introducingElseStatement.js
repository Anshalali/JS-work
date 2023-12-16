// introducing else statement it is used to execute code if the condition is false use else if to specify a new condition to test if the first condition is false.
// (introducing else statements)

function testElse(val) {
    var result = "";

    if (val >15) {
        result = "Bigger than 15";
    }else {
        result = "Less than 15";
    }

    return result;
}

console.log(testElse(20))
