//testing objects for property

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh" 
}


function checkObject(checkProp){

  if  (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  } else {
    return "Not found"
  }

   
}


console.log(checkObject("hello"))