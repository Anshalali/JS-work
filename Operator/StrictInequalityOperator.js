// comparison strict inequality operator it can be used to compare two values when they are not equal in value ad type result will be true
// (comparison strict inequality operator)

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10))