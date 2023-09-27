const accountController = require('../controller/accountController');
const express = require('express');

const router = express.Router();

router.post('/login', accountController.login);
router.post('/signup', accountController.signup);

module.exports = router;