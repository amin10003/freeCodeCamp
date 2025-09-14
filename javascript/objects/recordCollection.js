var myCollection = {
    2548: {
        album: "Slippery when wet",
        artist: "Bon Jovi",
        tracks: [
            "let it rock",
            "You give love a Bad Name"
        ]

    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks:[
            "1999",
            "Liettle red covette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
     5439: {
        album: "Abba Gold"
     }
};


var myCollectionCopy = JSON.parse(JSON.stringify(myCollection));


function updateRecords(id, prop, value){

    if(value === ""){
        delete myCollection[id][prop]
    } else if (prop === "tracks") {
        myCollection[id][prop] = myCollection[id][prop]  || [];
        myCollection[id][prop].push(value);
    } else {
        myCollection[id][prop] = value
    }

    return myCollection
}


var newRecord = updateRecords(2468, "artist", "Ahmed")
var newRecord2 = updateRecords(5439, "tracks", "dalxurye")

console.log(newRecord2)