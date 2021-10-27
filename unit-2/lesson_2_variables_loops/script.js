// find the first number that is a multiple of 3 and 7 
function findMultipleOfThreeSeven(){
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 7 === 0){
            console.log(`${i} is a multiple of 3 and 7`)
            return
        }
        console.log(i)
    }
    console.log("this is the end of the function")
}

let answer = findMultipleOfThreeSeven()
console.log(`The answer is: ${answer}`)

// two keywords we can use to exit to loop
// return is used to exit from a function (return value)
// break is just used to exit the loop