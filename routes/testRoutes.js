const express = require('express')
const { testController } = require('../controllers/testController')

//router obj
const router = express.Router()


//routes
router.get('/test',testController);

//export
module.exports=router;