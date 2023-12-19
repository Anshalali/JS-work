// delete properties it can be used to delete properties from an object

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.bark;

console.log(myDog);