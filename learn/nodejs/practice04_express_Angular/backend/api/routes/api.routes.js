const app = require('express');
const router = app.Router();
const providersController = require('../controller/provider.controller');


router.post('/providers/add', providersController.add)

router.get('/', providersController.getProviders)
router.get('/providers', providersController.getProviders)

router.get('/providers/info/:id', providersController.getProvider)


router.post('/providers/update/:id', providersController.updateProvider)
router.get('/providers/delete/:id', providersController.deleteProvider)
router.get('/*', providersController.error)

module.exports = router