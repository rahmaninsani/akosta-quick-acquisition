const router = require('express').Router();
const { isAuthenticated } = require('../middlewares');

const loginRoute = require('./login.route');
const dashboardRoute = require('./dashboard.route');
const hostelRoute = require('./hostel.route');

router.use('/login', loginRoute);
router.use('/dashboard', isAuthenticated, dashboardRoute);
router.use('/hostel', isAuthenticated, hostelRoute);
router.use('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
