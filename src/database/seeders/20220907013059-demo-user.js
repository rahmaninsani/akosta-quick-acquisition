'use strict';

const { hash } = require('../../utils');

module.exports = {
  async up(queryInterface, Sequelize) {
    const preparedUsers = [
      {
        name: 'Admin Test',
        email: 'admin@gmail.com',
        password: await hash('test'),
        slug: 'admin-test',
        gender: 'male',
        phone: '123',
        status: 'active',
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mitra Test',
        email: 'mitra@gmail.com',
        password: await hash('test'),
        slug: 'mitra-test',
        gender: 'male',
        phone: '123',
        status: 'active',
        role_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Customer Test',
        email: 'customer@gmail.com',
        password: await hash('test'),
        slug: 'customer-test',
        gender: 'male',
        phone: '123',
        status: 'active',
        role_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert('users', [...preparedUsers]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
