const sequelize = require('sequelize');
const { User, Address, Village, District, City, Province } = require('../models');

const Service = require('./service');

class UserService extends Service {
  static async findOneByEmail(email) {
    const options = {
      where: {
        email,
      },
    };

    return await super.findOne(options);
  }

  static async findAllJoinAddress() {
    const options = {
      attributes: [
        'name',
        'email',
        'slug',
        'status',
        'slug',
        [sequelize.col('Address.Village.name'), 'villageName'],
        [sequelize.col('Address.District.name'), 'districtName'],
        [sequelize.col('Address.City.name'), 'cityName'],
        [sequelize.col('Address.Province.name'), 'provinceName'],
      ],
      include: [
        {
          model: Address,
          as: 'Address',
          attributes: [],
          include: [
            {
              model: Village,
              attributes: [],
            },
            {
              model: District,
              attributes: [],
            },
            {
              model: City,
              attributes: [],
            },
            {
              model: Province,
              attributes: [],
            },
          ],
        },
      ],
    };

    return await super.findAll(options);
  }
}

UserService.model = User;

module.exports = UserService;
