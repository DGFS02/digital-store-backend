'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      Array.from({ length: 20 }).map((_, index) => ({
        name: 'User ' + (index + 1),
        email: `user-${(index + 1)}@email.com`,
        password: '123456',
        role: '?',
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
