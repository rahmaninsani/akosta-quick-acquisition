const { UserService } = require('../services');
const { render, toCapitalizeEachWord, toDateTimeFormat } = require('../utils');

class HostelController {
  static async index(req, res) {
    try {
      const users = await UserService.findAllJoinAddress();

      render(res, {
        page: 'hostel/index',
        props: {
          title: 'Hostel',
          data: {
            users,
          },
          util: {
            toCapitalizeEachWord,
            toDateTimeFormat
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}

module.exports = HostelController;
