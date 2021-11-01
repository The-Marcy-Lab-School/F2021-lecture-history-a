//

/*
- Where certain variables in avaliable
- between the { }
- Scope: where a variable is born, lives, and dies...
*/

//Hoisting - the idea of lifting some code up to the top of the file

// console.log(a)
// var a = "green grapes"
// console.log(a)



// variables declared with var
// their declaration gets hoisted, but not their assignment 


// variables decalred with let or const
// their declaration doesn't really get hoisted, nor their assignment



















//redeclaring and reassigning
// var x = 5;
// x = 8;
// console.log(x)

// let y = 5;
// y = 8;
// console.log(y)

// const z = 9;
// console.log(x)

// var a = "reuben"


// function one(){
//     var a = "maya"
//     console.log(a)
// }

    
// function two(){
//     console.log(a)
// }

// one()
// two()

// console.log(a)









// let a = "erwins"

// function one(a){
//     //let a = whatever arg is passed
//     console.log("inside function one: ", a) //ann
// }

// function two(){
//     console.log("inside function two: ", a) //erwins
// }

// one("ann")
// two()

function test(){
    
    console.log(advice)
    
    if (true) {
        var advice = 'Wear your sunshades!';
        console.log(advice);
    }
    
    console.log(advice);
    
    
}

test()

console.log("Does it work outside the function?")
console.log(advice)