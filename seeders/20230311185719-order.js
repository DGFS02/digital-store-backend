'use strict';
var { User, Product, Order } = require('../models');

const getRandomIndexFromArrayLength = (length) => {
  return Math.floor(Math.random() * length);
} 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await User.findAll();
    const products = await Product.findAll();

    
    await queryInterface.bulkInsert(
      'Orders',
      Array.from({ length: 20 }).map((_, index) => ({
        userId: users[getRandomIndexFromArrayLength(users.length)].id,
        dateOrder: new Date(),
        createdAt: '2022-12-01 08:50:30',
        updatedAt: '2022-12-01 08:50:30',
      })),
      {}
    );

    const orders = await Order.findAll();

    await queryInterface.bulkInsert(
      'OrderProducts',
      Array.from({ length: 20 }).map((_, index) => ({
        orderId: orders[getRandomIndexFromArrayLength(orders.length)].id,
        productId: products[getRandomIndexFromArrayLength(products.length)].id,
        createdAt: '2022-12-01 08:50:30',
        updatedAt: '2022-12-01 08:50:30',
      })),
      {}
    );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
