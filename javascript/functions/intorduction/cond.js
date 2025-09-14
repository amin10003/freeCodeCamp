function testEqual(val) {
    if (val == 13) {
        return "Equal"
    } else{
        return "Not Equal"
    }
}

// console.log(testEqual(10))


function compare(a, b) {
    if(a === b){
        return "Equal"
    } else {
        return "Not Equal"
    }
}


// console.log(compare(10, 10))

function logicalOp(c, d) {
    if (c > d) {
        return `${c} is greater than ${d}`
    } else {
        return `${d} is greater than ${c}`
    }
}

// console.log(logicalOp(40, 32))


// console.log(logicalOp(10, 24))

function testLogical(val){
    if(val < 10 || val > 20) {
        return "Outside"
    }
    return "Inside"
}

// console.log(testLogical(14))



function testElse(val) {

    var result = "";


    if(val  > 5){
        result = " 5 or Greatet  "
    } else {
        result = "smaller than"
    }

    return result
}

console.log(testElse(8))