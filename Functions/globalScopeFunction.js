// global scope function it can be used to execute a function in global scope and we can use it whole environment of our project
// (global scope function)

function executeInGlobalScope(func) {
    func.call(this);
  }