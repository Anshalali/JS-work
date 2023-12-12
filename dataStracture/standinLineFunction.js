// stand in line (abstract data stracture) it can be used when we want remove the first item in an array and add new item at the end
// (manipulate arrays with shift and unshift)

function nextinLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var myArray = [1,2,3,4,5];

console.log("before",JSON.stringify( myArray));
console.log(nextinLine(myArray, 6));
console.log("after",JSON.stringify( myArray));
