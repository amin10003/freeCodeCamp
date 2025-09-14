var myStorage = {
    car: {
        inside: {
            glove_box: "maps",
            passenger_seat: "crumb"
        },
        outside:{
            trunk: "Jack"
        }
    }
}


var gloveBoxContents = myStorage.car.inside.glove_box

console.log(gloveBoxContents)

//Accessing Nasted Arrays

var myPlants = [
    {
        type: "flower",
        list: [
            "rose",
            "tulip",
            "dendelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var sencondTrees = myPlants[1].list[1]

console.log(sencondTrees)