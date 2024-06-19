const router = require('express').Router()
const providersController = require('../controller/providersController.cjs')

router.get('/add-provider', providersController.addProvider)
router.post('/add', providersController.add)

router.get('/', providersController.getProviders)

router.get('/info/:id', providersController.getProvider)


router.get('/edit/:id', providersController.editProvider)
router.post('/update/:id', providersController.updateProvider)
router.get('/delete/:id', providersController.deleteProvider)

module.exports = router