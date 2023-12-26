// print 0 to 100 number using arrays and for loop
var myArray = [];
for (var a = 0; a < 100; a++) {
    myArray.push(a);
};
// console.log(myArray);



// print 0 to 100 number using for loop
for (var a = 0; a <= 100; a++) {
    // console.log(a);
};



// print 0 to 1000 numbers which are divisible by 3 using for loop
for (var a = 1; a <= 1000; a++) {
    if (a % 3 === 0) {
        // console.log(a);
    }
};



// print (table 5) and when then table reach 25 then it's convert in to (table 2) using for loop
var  temp  = 5;
for (var a = 1; a <= 10; a++) { {
}
if (temp * a === 25) {
    temp = 2;
}
// console.log(temp * a);
};



// print (table 5) using for loop
for (var a = 1; a <= 10; a++) {
    var temp = 5;
    // console.log(temp * a);
}



// print capital letter alphabet using for loop
for ( var a = 65; a <= 90; a++) {
    var letter = String.fromCharCode(a);
    // console.log(letter);
}



// print capital letter alphabet in backward using for loop
for (var a = 90; a >= 65; a--) {
    var abc = String.fromCharCode(a);
    // console.log(abc);
}



// print capital letter and small letter alphabet together using for loop
for (var a = 65; a <= 90; a++) {
    var bigLetter = String.fromCharCode(a);
    var smallLetterr = String.fromCharCode(a + 32);
    //  console.log(bigLetter + smallLetterr);
}
  



// print small letter alphabet using for loop
for (var i = 97; i <= 122; i++) {
    var alphabet = String.fromCharCode(i);
    // console.log(alphabet);
}



// print small letter alphabet except 'a', 'e', 'i', 'o', 'u' using for loop
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    var alphabet = String.fromCharCode(i);
    if (!['a', 'e', 'i', 'o', 'u'].includes(alphabet)) {
        // console.log(alphabet);
    }
}