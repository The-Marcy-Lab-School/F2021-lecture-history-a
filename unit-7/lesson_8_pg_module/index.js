const express = require('express')
const pool = require('./dbconfig')
const app = express()
const port = 3000

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pets', async (req, res) => {
  const pets = await pool.query('SELECT * FROM pets ORDER BY id')
    .then(results => {return results.rows})
  res.status(200).json(pets)
})

app.get('/pets/:id', async (req, res) => {
  const id = req.params.id
  const pet = await pool.query("SELECT * FROM pets WHERE id = $1", [id])
    .then(results => {return results.rows[0]})
  console.log(pet)
  if(pet){
    res.status(200).json(pet)
  } else {
    res.sendStatus(404)
  }
})

app.post('/pets', async (req, res) => {
  const {name, species, owner_id} = req.body
  const createPet = await pool.query(
    `INSERT INTO pets (name, species, owner_id) VALUES ($1, $2, $3)  
    RETURNING id, name, species, owner_id`, [name, species, owner_id]
  ).then(results => {return results.rows[0]})
  res.status(201).json(createPet)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})