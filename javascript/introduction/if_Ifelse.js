var names = ["ahmed", "Farah", "Guled", "Gedi", "Ali", "Elmi", "Aisha", "Maryam", "Fatuma"]

function golfScore(par, stroke) {
    if(stroke == 1) {
        return names[0]
    }else if(stroke <= 2) {
        return names[1]
    } else if(stroke <= par - 2) {
        return names[2]
    } else if(stroke == par - 1) {
        return names[3]
    } else if(stroke == par) {
        return names[4]
    }else if(stroke == par + 1) {
        return names[5]
    }else if(stroke == par + 2) {
        return names[6]
    }else if(stroke == par + 3) {
        return names[7]
    }else{
        return names[8]
    }


}

console.log(golfScore(2,4))
console.log(golfScore(4, 4))
console.log(golfScore(6, 4))