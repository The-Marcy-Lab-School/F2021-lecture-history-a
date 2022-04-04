const dbPool = require('../dbconfig')
const Pet = require('../models/petsModel')

console.log(Pet)

const getPets = async (req, res) => {
  const pets = await Pet.getPetsFromDB()
  res.status(200).json(pets)
}

const getSinglePet = async (req, res) => {
  console.log("inside getSinglePet")
  const id = req.params.id
  const pet = await Pet.getSinglePetFromDB(id)
  if(pet){
    res.status(200).json(pet)
  } else {
    res.sendStatus(404)
  }
}

const addPet = async (req, res) => {
  console.log("inside addPet")
  const {name, species, owner_id} = req.body
  const createPet = await Pet.addPetToDB(name, species, owner_id)
  res.status(201).json(createPet)
}

module.exports = {
  getPets,
  getSinglePet,
  addPet
}