const { Pool } = require('pg')

//new instance of the Pool class
const pool = new Pool({
  database: 'pets',
  user: 'postgres',
  password: ''
})

module.exports = pool



