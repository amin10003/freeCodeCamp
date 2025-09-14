// returning Early Pattern from function

function abTets(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
console.log(abTets(2, -2));