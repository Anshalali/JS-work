// switch statements it can be used to replace if else statements
// (switch statements)

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";             
    }
    return answer;
}

console.log(caseInSwitch(4));