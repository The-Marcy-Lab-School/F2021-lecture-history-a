// console.log("CLOSURES!")

// // Keeps track of a counter value that starts at a certain number, 
// // Have some way to increment the counter value.
// // This should be the ONLY way we can mutate the value

// // RETURNS a function
// function makeCounter(num, item){
//     let counter = num; //this variable has been closed over
    
//     return function (){
//         counter++;
//         console.log(`Counted ${counter} ${item}s`);
//     }
// }


// let duckCounter = makeCounter(5, 'duck');
// let sheepCounter = makeCounter(100, 'sheep');
var a = "I AM A VARIABLE"

function hello(){
    console.log(this)
}




const ann = {
    firstName: "Ann",
    hello (){
        console.log(`${this.firstName} says hi`)
    },
    teach: function (){
        console.log(`${this.firstName} is teaching`)
    },
    execute: () => {
        console.log(this)
    }
}

// console.log(this)
























// const cellphone = {
//     phoneNumber: '8001234567',
//     name: "Ann Duong",
//     contacts: [],
//     addContact: function (contactName, number) {
//         this.contacts.push({ name: contactName, phoneNumber: number });
//         console.log(`Added ${contactName} as a contact!`)
//     },
//     numOfContacts: function () {
//         return this.contacts.length            
//     }
// }
