function switchOfStuff(val) {
    var answer = ""
    switch(val) {
        case "bob":
            answer = "Marley"
            break
        case 42:
            answer = "The answer"
            break
        case 1:         
            answer = "There is no #1"
            break
        case 99:
            answer = "Missed me by this much!"
            break
        case 7:
            answer = "Ate Nine"
            break       
        default:
            answer = "invalid"
    }   
    return answer        
}


console.log(switchOfStuff(99))








function changeToSwich(val) {
    var answer = ""
    if(val === "bob") {
        answer = "Marley"
    } else if(val === 42) {
        answer = "The answer"
    } else if (val === 1) {
        answer = "There is no #1"
    } else if (val === 99) {
        answer = "Missed me by this much!"
    } else if (val === 7) {
        answer = "Ate Nine"
    } else {
        answer = "invalid"
    }

    return answer
}

console.log(changeToSwich(42))
