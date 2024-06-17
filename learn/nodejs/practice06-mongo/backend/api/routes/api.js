const app = require('express');
const router = app.Router();
var createError = require('http-errors');
const providers = require('../model/providers.js');
const providersController = require('../controller/provider.controller');


// @route GET api/providers
// @desc Get all providers
router.get('/providers', providersController.getProviders);

// @route GET api/providers/:id
// @desc Get a provider by ID
router.get('/providers/:id', providersController.getProvider);

// @route POST api/providers
// @desc Create a new provider
router.post('/providers', providersController.createProvider);

// @route PUT api/providers/:id
// @desc Update a provider by ID
router.put('/providers/:id', providersController.updateProvider);

// @route DELETE api/providers/:id
// @desc Delete a provider by ID
router.delete('/providers/:id', providersController.deleteProvider);

// @route Delete all providers
// @desc Delete all providers
router.delete('/providers', providersController.deleteProviders);



router.get('/*', (req, res, next) => {
    notFound(req, res, next);
})

router.post('/*', (req, res, next) => {
    notFound(req, res, next);
})
router.put('/*', (req, res, next) => {
    notFound(req, res, next);
})
router.delete('/*', (req, res, next) => {
    notFound(req, res, next);
})

function notFound(req, res, next) {
    next(createError(404));
}

module.exports = router;