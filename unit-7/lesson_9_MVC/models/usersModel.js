const dbPool = require('../dbconfig')

//our way to interact wth data in our Database
class User {

  //User.getUsersFromDB
  static getUsersFromDB(){
    return dbPool.query('SELECT * FROM users ORDER BY id').then(results => {return results.rows})
  }

  static getSingleUserFromDB(id){
    return dbPool.query("SELECT * FROM users WHERE id = $1", [id]).then(results => {return results.rows[0]})
  }

  static getPetsByUserFromDB(id){
    return dbPool.query('SELECT * FROM pets WHERE owner_id = $1', [id]).then(results => {return results.rows})
  }
}
module.exports = User



//returns a promise
// function getUsersFromDB(){
//   return dbPool.query('SELECT * FROM users ORDER BY id').then(results => {return results.rows})
// }

// function getSingleUserFromDB(id){
//   return dbPool.query("SELECT * FROM users WHERE id = $1", [id]).then(results => {return results.rows[0]})
// }

// function getPetsByUserFromDB(id){
//   return dbPool.query('SELECT * FROM pets WHERE owner_id = $1', [id]).then(results => {return results.rows})
// }

// module.exports = {
//   getUsersFromDB,
//   getSingleUserFromDB,
//   getPetsByUserFromDB
// }