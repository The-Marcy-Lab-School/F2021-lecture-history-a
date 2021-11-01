
//function declaration
function double(num){
    return num * 2
}

//function declaration
function negative(x){
    return -x
}

//funciton declaration
function makeDoubleNegative(a){
    //let a = ??? the argument
    a = double(a)
    a = negative(a)
    return a    
} 


// console.log(double(3))
// console.log(negative(4))

//function expression
const triple = function(num){
    return num * 3
}




//expression => arrow function 
let multiplyTogether = (x, y) => {
    return x * y
}


console.log(multiplyTogether(2, 3))
























// console.log("Can't wait to learn about functions!")

// function hello(name){
//     console.log("hello, " + name)
//     return name.toUpperCase()
// }

// let upper = "ANN"