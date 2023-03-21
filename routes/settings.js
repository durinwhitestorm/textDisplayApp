const express = require('express')
const router = express.Router()
const settings = require('../controllers/settings') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, settings.getInfo)

router.get('/chooseGame', settings.chooseGame)

router.post('/addFact', settings.createFacts)

router.delete('/deleteFact', settings.deleteFact)

module.exports = router