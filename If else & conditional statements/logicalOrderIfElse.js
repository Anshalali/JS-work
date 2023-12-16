// logical order if else statements it will execute from top to bottom
//(logical order if else)

function orderMyLogic(val) {
    if (val > 20) {
        return "greater than 20";
    }else if (val > 10) {
        return "gearater than 10";
    }else {
        return "between 5 to 10";
    }
}

console.log(orderMyLogic(7));


function testOrderMyLogic(val) {
    if (val < 10) {
        return "less than 10";
    }else if (val < 20) {
        return "less than 20";
    }else {
        return "between 20 to 25";
    }
}

console.log(testOrderMyLogic(23))