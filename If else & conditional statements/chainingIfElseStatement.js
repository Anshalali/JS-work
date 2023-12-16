// chaining if else statements it is possible to chain if else statements we can create multiple if else statements like chain or group
// (chaining if else statements)

function testSize(num){
    if(num < 5) {
        return "tiny"
    }else if(num < 10){
        return "small";
    }else if(num < 20){
        return "medium";
    }else if(num < 30){
        return "large";
    }else{
        return "Huge";
    }
}

console.log(testSize(37))