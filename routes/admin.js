var express = require('express');
var router = express.Router();
var { Product } = require('../models');

router.get('/products', function (req, res, next) {
  res.render('products/form', { title: 'Products' });
});

router.get('/login', function (req, res, next) {
  res.render('auth/login', { title: 'Login' });
});

router.get('/users', function (req, res, next) {
  res.render('register', { title: 'Cadastro de Usuarios' });
});

router.get('/products/list-all', function (req, res, next) {
  res.render('products/listAll', { title: 'Listagem de Produtos' });
});

router.get('/products/:id/edit', async function (req, res, next) {
  const product = await Product.findByPk(req.params.id);

  res.render('products/edit', { title: 'Editar Produtos', product });
});


module.exports = router;
