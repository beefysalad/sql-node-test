const express = require('express')
const router = express.Router()
const {routeControl} = require('../controllers/routeController')

router.post('/',routeControl)


module.exports = router