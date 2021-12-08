//factory function
//it creates a person object for you every time its invoked
function makePerson(fName, lName, isP, ssn){
    return {
        _firstName: fName, 
        _lastName: lName,
        _ssn: ssn,
        get socialSecurityNumber() {
          return "XXX-XX-" + this._ssn.substring(5) 
        },
        getFullName: function(){
            return `${this._firstName} ${this._lastName}`
        },
        get fullName(){
            return `${this._firstName} ${this._lastName}` 
        },
        set fullName(newName){
            let nameArray = newName.split(" ")
            this._firstName = nameArray[0]
            this._lastName = nameArray[1]
        },
        isProgrammer: isP,
        greet: function(){
            console.log(`Hello, my name is ${this.fullName} and I am${this.isProgrammer ? " " : " NOT "}a programmer`)
        }
    }
}

let reuben = makePerson('Reuben', 'Ogbonna', true, '123456789')
let maya = makePerson('Maya', 'Bhattacharjee', false, '987654321')
let ann = makePerson('Ann', 'Duong', true, '000000000')


console.log(reuben)
console.log(maya)
console.log(ann)

// let person = { 
//     firstName: "Reuben",
//     lastName: "Ogbonna",
//     isProgrammer: true,
//     greet: function(){
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
//     }
// }

// let person2 = {
//     firstName: "Maya", 
//     lastName: "Bhattacharjee",
//     isProgrammer: false, 
//     greet: function(){
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
//     }
// }

// let person3 = {
//     firstName: "Ann", 
//     lastName: "Duong",
//     isProgrammer: true, 
//     greet: function(){
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
//     }
// }
