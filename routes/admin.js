const express = require('express')
const router = express.Router()
const adminController = require('../controller/admincontroller')


router.get('/', adminController.getHome);
router.get('/search',adminController.getSearch);
router.get('/register',adminController.getRegister);
router.post('/register',adminController.postRegister);
router.post('/detail',adminController.postDetail);
router.post('/searched',adminController.postSearch);
router.post('/search',adminController.postSearch);
module.exports = router