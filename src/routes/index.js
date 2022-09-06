const router = require('express').Router();

const loginRoute = require('./login.route');

router.use('/login', loginRoute);
router.use('/', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
