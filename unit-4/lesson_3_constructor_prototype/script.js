// console.log("hello world!")

//factory function
// function makePerson(name, age){
//     return {
//         name: name, 
//         age: age,
//         friends: []
//     }
// }

//Constructor functions
//should always start with a capital letter
function Person(name, age){
    this.friends = []
    this.name = name 
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`My name is ${this.name} and I am ${this.age}`)
}

Person.prototype.shout = () => {console.log("AHHH")}
Person.prototype.age = 100

const reuben = new Person("Reuben", 30)
const maya = new Person("Maya", 30)

let arr = new Array()

Object.prototype.peaceOut = function(){console.log("I'M OUT!")}


// console.log(reuben)
// console.log(maya)