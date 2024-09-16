const { loginController, registerController } = require("../controllers/userController.js")

const express = require('express')

//router object

const router = express.Router()

//router
//POST || LOGIN USER
router.post('/login',loginController)

//POST || REGISTER USER
router.post('/register',registerController)

module.exports = router
