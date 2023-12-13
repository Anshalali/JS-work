// Comparison greater then operator it can be used to compare two values if right value is greater then left value it will return true
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