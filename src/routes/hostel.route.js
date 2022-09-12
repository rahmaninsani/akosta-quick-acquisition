const router = require('express').Router();

const { HostelController } = require('../controllers');

router.get('/', HostelController.index);

module.exports = router;
