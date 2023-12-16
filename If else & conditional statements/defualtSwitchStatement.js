// defult swich statement it will executed if no case match it's works same like else in (if else statement)
// (defult swich statement)

function defultSwithCase(val) {
    var answer = "";

    switch (val) {
    case 1: answer = " the boy";
        break;
    case 2: answer = "the girl";
        break;
    case 3: answer = "the man";
        break;
    case 4: answer = "the woman";
        break;
    default: 
        answer = "i don't know";
        break;
    }
    return answer;
}

console.log(defultSwithCase(18));