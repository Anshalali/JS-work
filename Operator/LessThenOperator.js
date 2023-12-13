//comparison less than operator it can be used to compare two values if left value is less than to right value it will return true
// comparison less than operator

function testLessThan(val) {
    if (val < 20) {
        return "Less than 20";
    }

    if (val < 40) {
        return "Less than 40";
    }
    return "40 or over";
}

console.log(testLessThan(45));
