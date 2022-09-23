const router = require('express').Router();

const { UserController } = require('../controllers');

router.get('/', UserController.index);

router.get('/add', UserController.add);
router.post('/', UserController.save);

router.get('/:userSlug', UserController.detail);

router.get('/:userSlug/edit', UserController.edit);
router.put('/:userSlug', UserController.update);

router.delete('/:userSlug', UserController.delete);

module.exports = router;
