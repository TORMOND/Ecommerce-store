const express = require('express')
const router = express.Router()
const {signupUser, loginUser } = require('../controllers/userControllers')
//Login Routes
router.post('/Login', loginUser)

//Signup Routes
router.post('/Signup', signupUser)

module.exports = router