var express = require('express');
var router = express.Router();
var { Product } = require('../models');
var { User, Token } = require('../models');

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

router.post('/login', async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ user }, process.env.JWT_PRIVATE_KEY);

    await Token.build({
      jwt: token,
    }).save();

    res.status(201).json({ token });
  } else {
    res.status(401).json({ message: 'Email or password is incorrect' });
  }
  // try {
  // } catch (error) {
  //   throw new Error(error)
  //   res.status(500).json({ message: error.message });
  // }
});

router.post('/users', async (req, res, next) => {
  const user = await User.build({
    email: req.body.email,
    password: req.body.password,
  });

  user.save().then((createUser) => {
    res.status(201);
    res.json(createUser);
  });
});

module.exports = router;
