// Comparison strict equality operator it can be used to check if two values and types must be equal if not it will be false
// (comparison operators)

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));