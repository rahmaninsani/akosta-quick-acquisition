const { render } = require('../utils');

class HostelController {
  static index(req, res) {
    const users = [
      {
        name: 'Alice',
        email: 'alice@gmail.com',
        address: {
          village: 'Village A',
          district: 'District A',
          city: 'City A',
          province: 'Province A',
        },
        status: 'Active',
        createdAt: '2020-01-01',
      },
      {
        name: 'Bob',
        email: 'bob@gmail.com',
        address: {
          village: 'Village B',
          district: 'District B',
          city: 'City B',
          province: 'Province B',
        },
        status: 'Active',
        createdAt: '2020-01-01',
      },
    ];
    render(res, {
      page: 'hostel/index',
      props: {
        title: 'Hostel',
        data: {
          users,
        },
      },
    });
  }
}

module.exports = HostelController;
