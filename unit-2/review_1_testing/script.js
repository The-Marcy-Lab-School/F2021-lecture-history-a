console.log("functions are fun");

var greeting = "hello";

//Function Declaration
// function toNegative(int){
//     return int * -1
// }

//Function Expression 
// let toNegative = function (int){
//     return int * -1
// }

let upperCase = str => {
    console.log(`Hello ${str}`);
    return str.toUpperCase();
}

//Arrow Function
let toNegative = int => -int; 

let double = x => 2 * x; 

let multiply = (a, b) => a * b 


//If you have exactly one parameter, then the parenthesis are optional
//If your function BODY is a single line return, then you don't need the {} or the return
//Arrow functions allow you to write short function





//which of three numbers is greatest

let int1 = 9
let int2 = 6
let int3 = 10
                                                      //is int2 or int3 greater?
// let greatest = (int1 > int2 && int1 > int3) ? (int1) : (int2 > int3 ? int2 : (cond ? val1 : val2))

if(int1 > int2 && int1 > int3){
    return int1
}else if(int2 > int3){
    return int2
}else{
    return int3   
}





















