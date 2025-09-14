// function caseInswitch(val){
//     var answer = "";

//     switch(val){
//         case 1 : 
//             answer = "Alpha";
//             break;
//         case 2 :
//             answer = "Beta";
//             break
//         case 3 : 
//             answer = "Gamma";
//             break
//         case 4 :
//             answer = "Delta"  ;
//             break
//             default :
//             answer = "Out of reach" 
//     } 

//     return answer
// }

// console.log(caseInswitch(10))





function seqeuntialSizes(val){
    var answer = ""

    switch(val){
        case 1 :
        case 2 :
        case 3 :
            answer = "Low";
            break
        case 4 :
        case 5 :
        case 6 :
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break
        default :
        answer = "None"
    }
    return answer
}

console.log(seqeuntialSizes())