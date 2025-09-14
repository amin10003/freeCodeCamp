//nested functions are closures

function f1(x){
    function f2(y){
        return x * y
    }

    return f2;
}

const layaab = f1(90)


console.log(layaab(76))
