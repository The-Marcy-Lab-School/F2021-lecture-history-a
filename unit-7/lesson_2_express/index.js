//requires and constant variables
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
const fellows = ['kay', 'GP', 'damian']

// use your middleware (middle step)
app.use(cors())

//routes    
app.get('/', (req, res) => {
    res.status(200)

  if(req.query.name){
    res.send(`Hello ${req.query.name}`)
  }
  res.send('Hello Malcolm X')
})

app.get('/marcylab', (req, res) => {
  debugger
  res.status(200)
  .json({fellows: fellows})
})

//server lsitens on a port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})