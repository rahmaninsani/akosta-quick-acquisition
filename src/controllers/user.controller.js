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

  static add(req, res) {
    render(res, {
      page: 'user/add',
      props: {
        title: 'Tambah Pengguna',
      },
    });
  }

  static async save(req, res) {
    res.status(200).json({
      code: 200,
      message: 'OK',
    });
  }

  static async detail(req, res) {
    const { userSlug } = req.params;

    render(res, {
      page: 'user/detail',
      props: {
        title: 'Detail Pengguna',
        data: {
          userSlug,
        },
      },
    });
  }

  static async edit(req, res) {
    const { userSlug } = req.params;

    render(res, {
      page: 'user/edit',
      props: {
        title: 'Edit Pengguna',
        data: {
          userSlug,
        },
      },
    });
  }

  static async update(req, res) {
    res.status(200).json({
      code: 200,
      message: 'OK',
    });
  }

  static async delete(req, res) {
    res.status(200).json({
      code: 200,
      message: 'OK',
    });
  }
}

module.exports = UserController;
