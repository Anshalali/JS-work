// accessing object properties with variable it can be used to access object properties we can use bracket notation in numbers also
// (access object properties with variable)

var testObj = {
    127: "hello",
    12: "world",
    34: "foo",
};

var playerNumber = testObj[127];
var player = testObj[playerNumber];

var playerNumber2 = testObj[12];
var player2 = testObj[playerNumber];

console.log(playerNumber, playerNumber2);