const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController')

const router = express.Router()

//routes
//ADD INVENTORY 
router.post('/create-inventory', authMiddleware, createInventoryController)

// GET ALL BLOOD RECORD 
router.get('/get-inventory',authMiddleware,getInventoryController)

// GET RECENT BLOOD RECORD 
router.get('/get-recent-inventory',authMiddleware,getRecentInventoryController)

// GET DONAR RECORD 
router.get('/get-donars',authMiddleware,getDonarsController)

//GET HOSPITALS RECORD 
router.get('/get-hospitals',authMiddleware,getHospitalController)  ///getHospitalController  ye function inventory controller me h

//GET Organisation RECORD 
router.get('/get-orgnaisation',authMiddleware,getOrgnaisationController)

//GET Organisation RECORD 
router.get('/get-orgnaisation-for-hospital',authMiddleware,getOrgnaisationForHospitalController)

// GET Hospital BLOOD RECORD 
router.post('/get-inventory-hospitals',authMiddleware,getInventoryHospitalController)

module.exports= router