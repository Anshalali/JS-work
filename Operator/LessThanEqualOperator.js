// Comparison less than equal operator it can be used to check if a value is less than or equal to another value  returns true if the left operand is less than or equal to the right operand, and false otherwise
// comparison less than equal operator

function testLessThenOrEqual(val) {
    if (val <= 10) {
        return "smaller then or equal 10"
    }

    if (val <= 20) {
        return "smaller then or equal 20"
    }
    return "bigger then 20"
}

console.log(testLessThenOrEqual(28))
