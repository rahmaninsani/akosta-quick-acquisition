const { Role } = require('../models');

const Service = require('./service');

class RoleService extends Service {
  static async findOneById(id) {
    const options = {
      where: {
        id,
      },
    };

    return await super.findOne(options);
  }
}

RoleService.model = Role;

module.exports = RoleService;
