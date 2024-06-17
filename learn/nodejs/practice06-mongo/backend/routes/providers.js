const express = require('express')
const router = express.Router()
const providersController = require('../controllers/providersController')

router.get('/', providersController.list)
router.get('/add-provider', providersController.addProvider)
router.post('/add', providersController.add)
router.get('/info/:id', providersController.details)
router.get('/edit/:id', providersController.edit)
router.post('/update/:id', providersController.update)
router.get('/delete/:id', providersController.delete)

module.exports = router