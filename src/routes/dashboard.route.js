const router = require('express').Router();

const { DashboardController } = require('../controllers');

router.get('/', DashboardController.index);

module.exports = router;
