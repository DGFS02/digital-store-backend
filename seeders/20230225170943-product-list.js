'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      Array.from({ length: 20 }).map((_, index) => ({
        name: 'Product ' + (index + 1),
        price: 110.5,
        description: 'Lorem ipsum',
        createdAt: '2022-12-01 08:50:30',
        updatedAt: '2022-12-01 08:50:30',
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
