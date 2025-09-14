// function caseInSwitch(val) {
//     var answer = ""
//     switch(val){
//         case 1:
//             answer = "Alpha";
//             break;
//             case 2:
//                 answer = "beta";
//                 break;
//                 case 3:
//                     answer = "gamma"
//                     break;
//                      case 4:
//                     answer = "delta"
//                     break;
//     }
//     return answer;
// }

// console.log(caseInSwitch(4)) 
function caseInSwitch(val) {
    var answer = ""
    switch(val){
        case "a":
            answer = "Lion";
            break;
            case "b":
                answer = "Cheater";
                break;
                case "c":
                    answer = "Dog"
                    break;
                     case "d":
                    answer = "Cat"
                    break;
                    default:
                        answer = "Stuff"
    }
    return answer;
}

console.log(caseInSwitch(2)) 