const teacher = "Ann"

function greet(){
  return 'hey yo!'
}

// module.exports.teacher = teacher
// module.exports.favNum = 7
module.exports = {
  teacher, //teacher: teacher 
  favNumber: 7,
  greet //greet: greet
}