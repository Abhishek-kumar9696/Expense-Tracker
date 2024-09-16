//const { loginController, registerController } = require("../controllers/userController")

const express = require('express')
const { addTransection, getALLTransection ,editTransection} = require('../controllers/transectionCtrl.js')

//router object

const router = express.Router()

//routes

router.post("/edit-transection",editTransection)
// addTransection POST method
router.post("/add-transection",addTransection)

//get Transections
router.post("/get-transection",getALLTransection);


module.exports = router;
