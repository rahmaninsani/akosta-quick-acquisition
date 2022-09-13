const router = require('express').Router();

const { LogoutController } = require('../controllers');

router.get('/', LogoutController.index);

module.exports = router;
