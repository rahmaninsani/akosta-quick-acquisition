const { User } = require('../models');

const Service = require('./service');
const { hash } = require('../utils');

class UserService extends Service {
  static async findOneUserByEmail(email) {
    const options = {
      where: {
        email,
      },
    };

    return await super.findOne(options);
  }
}

UserService.model = User;

module.exports = UserService;
