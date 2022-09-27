const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiManage') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, apiController.getGames)

router.get('/', ensureAuth, apiController.getFacts)

router.post('/createFact', apiController.createFacts)

router.delete('/deleteFact', apiController.deleteFact)

module.exports = router