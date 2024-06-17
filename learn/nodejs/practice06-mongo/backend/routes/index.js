const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const providersController = require('../controllers/providersController');
/* GET home page. */
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/login', mainController.login);
router.get('/register', mainController.register);


router.get('/providers', providersController.list);
module.exports = router;
