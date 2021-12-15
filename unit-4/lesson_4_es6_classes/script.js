// console.log("hello world!")

// OOP - create objects to model the real world
// factory function - create may instances of an object

//Contructor function
// function Person(name, age){
//     //this = {}
//     this.friends = []
//     this.name = name 
//     this.age = age
//     //return this
// }

// Person.prototype.greet = function(){
//     console.log(`My name is ${this.name} and I am ${this.age}`)
// }

// Class Syntax 
//Parent class (super class)
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.friends = [];
    }
    
    greet(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
    
    doActivity(activity){
        console.log(`My name is ${this.name} and I am ${activity}`)
    }
    
    makeFriend(friend){
        this.friends.push(friend)
        return `Hi, nice to meet you ${friend}. I am ${this.name}`
    }
    
    makeFriends(...people){
        this.friends.push(...people)
    }
    
    static shock(){
        console.log("This is shocking")
    }
    

}

//Teach should be the child class (subclass)
class Teacher extends Person { //inherit behavior from Person 
    constructor(name, age, subject){
        super(name, age) //calling this same method in the parent class
        this.subject = subject
    }
    
    lecture(){
        console.log(`Hello class, today we are going to learn about ${this.subject}`)
    }
    
    greet(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

// use the new keyword => go to that class's constructor
const ann = new Teacher("Ann", 28, "Farming")
const trav = new Person("Trav", 28)

























// class Array {
//     constructor(){
//         this.length = 0
//     }
    
//     push(newElement){
//         //code
//     }
    
//     pop(){
//         //code
//     }
    
//     map(func){
//         //code
//     }
    
//     static isArray(arr){
//         //check typeof arr === object && arr.length && checks other stuff
//         //return true or false
//     }
// }























