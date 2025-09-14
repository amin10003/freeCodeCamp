// function myLocalScope() {
//     var myVar = 7

//     console.log(myVar)
// }

// myLocalScope()


// //global vs local



var outerWear = "T-shirt";

function myOutfit() {

    var outerWear = "sweater"
    return outerWear
}

console.log(myOutfit())