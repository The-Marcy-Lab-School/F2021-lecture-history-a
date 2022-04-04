const express = require("express")
const usersController = require('../controllers/usersController')
const router = express.Router()

// We know the URL starts with '/users'
router.get('/', usersController.getUsers)
router.get('/:id', usersController.getSingleUser)
router.get('/:id/pets', usersController.getAUsersPets)

router.all('*', (req, res) => {
  res.send("This user route does not exist")
})
module.exports = router