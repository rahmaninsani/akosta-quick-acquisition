const router = require('express').Router();

const { LoginController } = require('../controllers');

router.get('/', LoginController.index);
// router.post('/', LoginController.auth);

module.exports = router;
