// function reusable() {
//     console.log("we love you")
// }


// reusable()



// function home(){
//     console.log("geeeeedi")
// }

// home()

// function addition(a, b) {
//     console.log(a + b)

// }

// addition(3, 7)



// function subtraction(c, d) {
//     return c - d
// }

// console.log(subtraction(90, 70))




var myGlobal = 10


function fun1() {
     oopsGlobal = 3
}



function fun2() {
    var outPut = "";

    if (typeof myGlobal != "undefined") {
        outPut += "myGlobal " + myGlobal
    }
    if (typeof oopsGlobal != "undefined") {
        outPut += "\noopsGlobal  "  + oopsGlobal
    }

    console.log(outPut)
}

fun2()