//escape sequence in strings

var myStr = "firstLine\n\t\\secondLine\nthirdLine";
console.log(myStr)


// add  two strings together using +

var ourStr = "I come first. " + "I come second.";
console.log(ourStr)


// add  two strings together using plus equal oprator

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr)


// add string with variable

var myName = "anshal"
var myStr = "Hello, my name is " + myName + ", i am fine.";
console.log(myStr)


// appending variable to strings

var anadjective = "awesome";
var myStr = "Aifist company is ";
console.log(myStr + anadjective)


// find the lenth of a string

var firstNameLenth = 0;
var firstName = "Anshal";
firstNameLenth = firstName.length;
console.log(firstNameLenth)


// bracket notation to find the first chracter of a string

var firstLatterOfFirstName = "";
var firstName = "anshal";
firstLatterOfFirstName = firstName[0];
console.log(firstLatterOfFirstName)


// bracket notation to find the first chracter of a string

var firstName = "Anshal";
var lastlatterofFirstName = firstName[firstName.length - 1];
console.log(lastlatterofFirstName)


// the word blank

function wordBlanks(myNoun, myAddjective, myVerb, myAddverb) {
    var result = "";
    result += "My " + myAddjective + " " + myNoun + " " + myVerb + " " + myAddverb + " " + "for the uni" + ".";
    return result;
}
console.log(wordBlanks("brother", "little", "got", "late"));