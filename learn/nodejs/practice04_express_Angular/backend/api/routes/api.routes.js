const app = require('express');
const router = app.Router();
const providersController = require('../controller/provider.controller');


router.post('/add', providersController.add)

router.get('/', providersController.getProviders)
router.get('/providers', providersController.getProviders)

router.get('/info/:id', providersController.getProvider)


router.post('/update/:id', providersController.updateProvider)
router.get('/delete/:id', providersController.deleteProvider)
router.get('/*', providersController.error)

module.exports = router