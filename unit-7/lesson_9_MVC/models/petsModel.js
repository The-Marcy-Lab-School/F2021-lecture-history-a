const dbPool = require('../dbconfig')

class Pet {
  //Pet.getPetsFromDB()
  static getPetsFromDB(){
    return dbPool.query('SELECT * FROM pets ORDER BY id').then(results => {return results.rows})
  }

  static getSinglePetFromDB(id){
    return dbPool.query("SELECT * FROM pets WHERE id = $1", [id]).then(results => {return results.rows[0]})
  }

  static addPetToDB(...args){
    return dbPool.query(`INSERT INTO pets (name, species, owner_id) VALUES ($1, $2, $3) RETURNING *`, 
      args).then(results => {return results.rows[0]})
  }

  // static addPetToDB(name, species, owner_id){
  //   return dbPool.query(`INSERT INTO pets (name, species, owner_id) VALUES ($1, $2, $3) RETURNING *`, 
  //     [name, species, owner_id]).then(results => {return results.rows[0]})
  // }

}

module.exports = Pet