const router = require('express').Router();

const { UserController } = require('../controllers');

router.get('/', UserController.index);
router.get('/:userSlug', UserController.detail);

module.exports = router;
