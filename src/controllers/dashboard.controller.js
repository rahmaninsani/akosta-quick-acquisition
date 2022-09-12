const { render } = require('../utils');

class DashboardController {
  static index(req, res) {
    render(res, {
      page: 'dashboard/index',
      props: {
        title: 'Dashboard',
      },
    });
  }
}

module.exports = DashboardController;
