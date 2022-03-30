//import express and cors
const express = require('express')
const cors = require('cors')

//create a server
const app = express()

//choose a port
const port = 8000

//Fake Database
const students = [{id: 1, name: "Shawn"}, {id: 2, name: "Mohammad"}]
counter = 3;

//Middleware 
app.use(cors()) //in order for our front-end to fetch to our backend
app.use(express.json()) //in order to parse req.body

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//send back a list of students
app.get('/students', (req, res) => {
  res.status(200).json(students)
})

//should create a new student from the req's body
//send that student back
app.post('/students', (req, res) => {
  let name = req.body.name
  if(name){
    let newStudent = {name: name, id: counter}
    students.push(newStudent)
    counter++
    res.status(201).json(newStudent)
  } else {
    res.status(400).send("Bad Request: Missing name in request body")
  }
})

//delete a student at a particular ID
app.delete('/students/:studentID', (req, res) => {
  let id = req.params.studentID
  let index = students.findIndex(student => student.id === parseInt(id))
  students.splice(index, 1)
  res.status(204).end()
})

//send back a single student
app.get('/students/:studentID', (req, res) => {
  let id = req.params.studentID
  let foundStudent = students.find(student => student.id === parseInt(id))
  if(foundStudent){
    res.status(200).json(foundStudent)
  } else {
    res.status(404).send("Not Found")
  }
})


//make server listen to request on that port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})