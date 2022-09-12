const router = require('express').Router();

const loginRoute = require('./login.route');
const dashboardRoute = require('./dashboard.route');
const hostelRoute = require('./hostel.route');

router.use('/login', loginRoute);
router.use('/dashboard', dashboardRoute);
router.use('/hostel', hostelRoute);
router.use('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
