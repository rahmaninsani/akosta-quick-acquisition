const { Address } = require('../models');

const Service = require('./service');

class AddressService extends Service {
  static async findAll() {
    return await super.findAll();
  }
}

AddressService.model = Address;

module.exports = AddressService;
