const { UserService } = require('../services');
const { render, toCapitalizeEachWord, toDateTimeFormat } = require('../utils');

class UserController {
  static async index(req, res) {
    try {
      const users = await UserService.findAllJoinAddress();

      render(res, {
        page: 'user/index',
        props: {
          title: 'User',
          data: {
            users,
          },
          util: {
            toCapitalizeEachWord,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async detail(req, res) {
    const { userSlug } = req.params;

    render(res, {
      page: 'user/detail',
      props: {
        title: 'Detail',
        data: {
          userSlug,
        },
      },
    });
  }
}

module.exports = UserController;
