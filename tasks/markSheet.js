// how to check your grades using javascript

var grade = ["A+", "A", "B", "C", "D", "F"];

function checkyourgrade(marks) {

    if (marks >= 90) {
        return grade[0];
    }
    else if (marks >= 75) {
        return grade[1];
    }
    else if (marks >= 60) {
        return grade[2];
    }
    else if (marks >= 50) {
        return grade[3];
    }
    else if (marks >= 40) {
        return grade[4];
    }
    else {
        return grade[5];
    }
}

console.log((checkyourgrade(39)))