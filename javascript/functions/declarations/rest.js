//rest  parameters
 // a function parametrv    that collects all remaining arguments into an array and can only be used as the last parameter of a function

function collectThing(x, ...y){
    console.log(x);
    console.log(y);

}


console.log(collectThing(5,3,4,32,21, 6,4,))