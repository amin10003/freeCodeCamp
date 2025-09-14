// // function printMessage() {
// //     console.log("Hello, World!");
// // }

// // printMessage()

// // function print(param, name = "User") {
// //     console.log(param, name);
// // }

// // print("Geedi, World!", "MOhamed");



// // const myContainer = function() {
// //     console.log("Hello from container");
// // };

// // myContainer();

// // const myArrayFuntion = (Array) => {
   
// //     return Array;
// // } 

// // console.log(myArrayFuntion([1,2,3,4,5]));

// // const myArrayFuntion2 = (Array) => Array;

// // console.log(myArrayFuntion2([1,2,3,4,5]));

// // const myArrayFuntion3 = Array => Array;

// // console.log(myArrayFuntion3([1,2,3,4,5]));


// // const myArrayFuntion4 = (Array, num) => Array + num;

// // console.log(myArrayFuntion4([1,2,3,4,5], [" ",6,7,8,9,10]));
// //  const myArrayFuntion5 = (Array, num) => Array.concat(num);

// //  console.log(myArrayFuntion5([1,2,3,4,5], 10));

//  const sum = (b, a) => b + a

//  console.log(sum("M", "N"));

//  let firstName = "Mohamed"



function calc(a , b = 0) {
    return ( 3 * (a + b));
}



console.log(calc(2, 6))