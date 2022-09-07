const passport = require('passport');
const { render } = require('../utils');

class LoginController {
  static index(req, res) {
    render(res, {
      page: 'login/index',
      props: {
        title: 'Login',
      },
    });
  }

  static async auth(req, res, next) {
    try {
      passport.authenticate('local', (err, user) => {
        if (err || !user) return res.redirect('/login');

        return req.login(user, (loginError) => {
          if (loginError) return next(loginError);
          res.redirect('/dashboard');
        });
      })(req, res, next);
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = LoginController;
