const router = require('express').Router();

const { HostelController } = require('../controllers');

router.get('/', HostelController.index);
router.get('/:userSlug', HostelController.detail);

module.exports = router;
