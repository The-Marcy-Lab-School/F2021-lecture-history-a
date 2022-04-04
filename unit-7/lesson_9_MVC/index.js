//requires
const express = require('express')
const usersRouter = require('./routes/usersRouter')
const petsRouter = require('./routes/petsRouter')

//server code
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//All routes that start with '/pets' => petsRouter
app.use('/pets', petsRouter)

//All routes that start with '/users' => usersRouter
app.use('/users', usersRouter)



app.all('*', (req, res) => {
  res.send('Silly dev, that route does not exist :p')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
