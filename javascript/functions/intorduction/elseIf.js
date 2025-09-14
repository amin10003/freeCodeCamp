function orderMyLogic(val){
    if(val < 5){
        return "less than 5"
    } else if (val <10){
        return "less than 10"
    }else{
        return "Greater than or equal to 10"
    }
}


// console.log(orderMyLogic(10))

function testSize(num){
    if(num < 5){
        return "Tiny";
    } else if(num < 10){
        return "Smaller";
    } else if(num < 15){
        return "medium";
    } else if(num > 20){
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(20))

