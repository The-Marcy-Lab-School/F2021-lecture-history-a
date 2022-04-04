const User = require('../models/usersModel')

const getUsers = async (req, res) => {
  const users = await User.getUsersFromDB()
  res.status(200).json(users)
}

const getSingleUser = async (req, res) => {
  const id = req.params.id //make sure id is a number
  const user = await User.getSingleUserFromDB(id)
  if(user){
    res.status(200).json(user)
  } else {
    res.sendStatus(404)
  }
}

const getAUsersPets = async (req, res) => {
  const id = req.params.id
  const pets = await User.getPetsByUserFromDB(id)
  res.status(200).json(pets)
}

module.exports = {
  getUsers,
  getSingleUser,
  getAUsersPets
}