// Comparison greater then or equal to operator it can be used to check if a value is greater or equal to another value returns true if the left operand is greater than or equal to the right operand, and false otherwise.
// comparison greater then or equal to operator

function testGreaterThenOrEqual(val) {
    if (val >= 40) {
        return "40 or over 40";
    }

    if (val >= 20) {
        return "20 or over 20";
    }
    return "less than 20";
}

console.log(testGreaterThenOrEqual("15"));