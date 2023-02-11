var express = require('express');
var router = express.Router();
var { Product, User } = require('../models');

router.get('/users', async (req, res, nes) => {
  const users = await User.findall();
  res.json(users);
});

router.post('/users', function (req, res, next) {
  const { User } = require('../models');
  const newUser = User.build({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  newUser.save();

  res.send('ok');
});

router.get('/products', async (req, res, next) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get('/products/:id', async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId);
  res.json(product);
});

router.post('/products', function (req, res, next) {
  const { Product } = require('../models');
  const newProduct = Product.build({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  newProduct.save().then((createdProduct) => {
    res.status(201);
    res.json(createdProduct);
  });
});

module.exports = router;
