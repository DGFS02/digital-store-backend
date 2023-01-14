var express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../models');

var router = express.Router();

router.post('/products', function(req, res, next) {
  const Product = require(`${__dirname}/../models/product`)(sequelize, DataTypes)
  const newProduct = Product.build({
    name: 'asdasd',
    price: 312312,
    description: '312312',
  })

  newProduct.save()
  
  Product.findAll().then((products) => {
    res.send(products)
  })
});

module.exports = router;
