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
}

module.exports = LoginController;
