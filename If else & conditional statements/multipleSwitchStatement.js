// multiple switch statement it can be used to perform different actions based on different conditions
// (multiple switch statement)

function multipleSwitchCase(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:
            answer = "very high";
            break;
    }
    return answer;
}

console.log(multipleSwitchCase(1))