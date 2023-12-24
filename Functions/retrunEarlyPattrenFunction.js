// retrun early pattren function it can be used to return early from a function when a condition is met.
// (retrun early pattren)

function abTest(a, b) {
    
    if (a < 0 || b < 0) {
      return undefined;
    } 
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
 
console.log(abTest(-2,2));