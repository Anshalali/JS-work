// testing Objects for Properties it can be used to test if an object has a property

var myObj = {
    "name": "John",
    "age": 30,
    "car": {
        "model": "Ford",
        "year": 2018
    }
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "not found";
    }
}

console.log(checkObj("world"));