// nesting for loops it is used to execute a block of code a specified number of times it repeats until a specified condition evaluates to false

function multiplyAll(arr) {
    var product = 1;

    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b < arr[a].length; b++) {
            product *= arr[a][b];
        } 
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);