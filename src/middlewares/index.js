const passportLocalStrategy = require('./passport-local-strategy.middleware');
const { isAuthenticated } = require('./auth.middleware');

module.exports = {
  passportLocalStrategy,
  isAuthenticated,
};
