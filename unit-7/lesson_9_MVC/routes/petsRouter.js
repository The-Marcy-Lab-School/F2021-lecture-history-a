const express = require("express")
const petsController = require('../controllers/petsController')
const router = express.Router()

router.get('/', petsController.getPets)
router.get('/:id', petsController.getSinglePet)
router.post('/', petsController.addPet)

module.exports = router