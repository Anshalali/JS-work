// comparisons with the logical (and &&) operator it can be used to combine two or more conditions and the result will be true if both conditions are true If any of the conditions is false the result will be false.
// comparisons with the logical And operator

function testLogicalAnd(val) {
    if (val <= 40 && val >= 20) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(28));
