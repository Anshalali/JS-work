// comparison greater then operator it can be used to compare two values
// greater then operator

function testGreaterThen(val) {
    if (val > 50) {
        return "over 50";
    }

    if (val > 25) {
        return "over 25";
    }
    return "under 25";
}

console.log(testGreaterThen(15));