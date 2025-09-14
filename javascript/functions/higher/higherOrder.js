//HOF - Higher Order Function
//1. take one or more functions as arguments
//2. return a function as a result

function getCapture(camera){
    camera()
}

getCapture(function(){
    console.log("taking picture")
})

function returnFn(){
    return function(){
        console.log("Hello World")
    }
}
 

const ans = returnFn()


ans()


[1, 2, 3, 3].filter(function(value){
    return value > 2
})


