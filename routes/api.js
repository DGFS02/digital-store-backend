var express = require('express');
var router = express.Router();
var { Product } = require('../models');

router.post('/register', async (req, res) => {
  try {
    const { userName, Email, Password } = req.body;
    const user = new User({ userName, Email, Password });
    await user.save();
    res.status(201).send({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(400).send({ error: 'Erro ao criar usuário.' });
  }
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
