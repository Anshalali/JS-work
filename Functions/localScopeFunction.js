// local scope function it can be used to define a function within a function it's only work inside the function
// (local scope function)


function fun1() {
    var opssLocal = 5; 
    // this is the local scope function
    function fun2() {
        console.log(opssLocal);
    }
    fun2();
}
fun1()