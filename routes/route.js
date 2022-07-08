const express = require('express')
const router = express.Router()
const {routeControl, routeSelect} = require('../controllers/routeController')

router.post('/',routeControl)
router.post('/login',routeSelect)

module.exports = router