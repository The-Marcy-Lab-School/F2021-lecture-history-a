// console.log("hello world!")

let person = { 
    name: "Reuben", 
    job: "Director", 
    isAwesome: null,
    hobbies: ["grill", "code", "father"],
    pet: {name: "Juan Pablo", age: 5, size: "medium"},
    greet: function (name){
        console.log(`What up ${name}`)
    },
    pet1: "Zuko",
    pet2: "Kahlo"    
}

let x = "pet"

// if(x in person){
//     console.log('Yes, this property is found')
// }else{
//     console.log("Nope... nothing...")
// }













let teacher = {
    name: "Ann",
    age: 29
}

let array = ['Yaya', 'Shawn', 'Pedro']

//iterate over and print out array
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
//array[0]
//array[1]
//array[2]

let school = {
    name: "Marcy",
    year: 2019,
    isGreat: true,
    founders: ["Reuben", "Maya"],
    key: "GP"
}

// let keyNames = Object.keys(school)

// console.log(school)
// console.log(keyNames)

// for(let i = 0; i < keyNames.length; i++){
//     let key = keyNames[i]
//     console.log(`Key is: ${key}`)
//     // console.log(`Value is: ${school[key]}`)
//     console.log(school[ keyNames[i] ] )
// }
array = ['Yaya', 'Shawn', 'Pedro']
console.log(array)

//for...in => iterate over keys in an objects 
//for...of => iterate over elements in an array
for(const x in array){
    console.log(x) 
}