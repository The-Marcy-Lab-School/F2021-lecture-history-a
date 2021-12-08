'use strict'
console.log(this) // for this code, what object am I working off of?

var a = "Apple";
var d = "Dog";
var e = "Elephant"

function test(){
    var b = "Bubble";
    var c = "cooool"
    console.log(b)
    console.log(c)
}


// factory function
function makeDog(n, b){
    return {
        name: n, 
        breed: b, 
        greet: function(){
            console.log(this) // for this code, what object am I working off of?
        }
    } 
}

// function alert(){
//     console.log("I am an alert")
// }

// when you invoke a function, this === window
function hello(){
    debugger
    console.log(this) //remain the window objects
    this.name = "hello"
}

function hello2(){
    console.log("hello again")
}

let zuko = makeDog("Zuko", "Terrier")
let juanPablo = makeDog("Juan Pablo", 'Fluff Lab')

// when you invoke a METHOD
// zuko.greet()


let teacher = {
    name: "Erwins",
    teach: function(){
        console.log(this)
        console.log("I am teacher")
    }
}