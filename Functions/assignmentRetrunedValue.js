// Assignment with a returned value of function it can be used to assign a value to a variable
// (assignment with a returned value)

var processed = 0;

function procesArg(num) {
    return (num + 3) / 5;
}

processed = procesArg(15);
console.log(processed)