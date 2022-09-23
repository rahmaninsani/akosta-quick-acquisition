const router = require('express').Router();

const { HostelController } = require('../controllers');

router.get('/', HostelController.index);

router.get('/add', HostelController.add);
router.post('/', HostelController.save);

router.get('/:hostelSlug', HostelController.detail);

router.get('/:hostelSlug/edit', HostelController.edit);
router.put('/:hostelSlug', HostelController.update);

router.delete('/:hostelSlug', HostelController.delete);

module.exports = router;
