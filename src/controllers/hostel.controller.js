const { UserService } = require('../services');
const { render, toCapitalizeEachWord, toDateTimeFormat } = require('../utils');

class HostelController {
  static async index(req, res) {
    try {
      const hostels = await UserService.findAllJoinAddress();

      render(res, {
        page: 'hostel/index',
        props: {
          title: 'Hostel',
          data: {
            hostels,
          },
          util: {
            toCapitalizeEachWord,
            toDateTimeFormat,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static add(req, res) {
    render(res, {
      page: 'hostel/add',
      props: {
        title: 'Tambah Hostel',
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
    const { hostelSlug } = req.params;

    render(res, {
      page: 'hostel/detail',
      props: {
        title: 'Detail',
        data: {
          hostelSlug,
        },
      },
    });
  }

  static async edit(req, res) {
    const { hostelSlug } = req.params;

    render(res, {
      page: 'hostel/edit',
      props: {
        title: 'Edit Hostel',
        data: {
          hostelSlug,
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

module.exports = HostelController;
