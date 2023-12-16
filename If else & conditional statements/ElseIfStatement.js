// Introducing else if statement it can be used to check multiple conditions if the one value is false then it can be used to check another value if 2nd value is false then it can be used to check 3rd value
// (introducing else if statement)

function testElseIf(val) {
    if (val >20) {
        return "Bigger than 20";
    }else if (val < 10) {
        return "less than 10";
    }else {
        return "between 10 and 20";
    }
}

console.log(testElseIf(2))