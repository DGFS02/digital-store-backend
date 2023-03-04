var express = require('express');
var router = express.Router();

var { Product, User, Token } = require('../models');

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

/* Rota para atualizar o produto*/
router.put('/products/:id', async function (req, res, next) {
  try {
    const product = await Product.findByPk(req.params.id);

    product.set({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    });

    product.save();

    res.json('Sucess');
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ error: 'Internal server error' });
  }
});

module.exports = router;
