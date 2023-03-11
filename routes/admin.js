var express = require('express');
var router = express.Router();
var { Product } = require('../models');

router.get('/products/new', function (req, res, next) {
  res.render('products/form', { title: 'Cadastro de Produtos' });
});

router.get('/products', function (req, res, next) {
  res.render('products/list', { title: 'Listagem de Produtos' });
});

router.get('/products/:id/edit', async function (req, res, next) {
  const product = await Product.findByPk(req.params.id);

  res.render('products/edit', { title: 'Editar Produtos', product });
});

router.get('/users', function (req, res, next) {
  res.render('users/list', { title: 'Listagem de Usuários' });
});

router.get('/users/new', function (req, res, next) {
  res.render('register', { title: 'Cadastro de Usuarios' });
});

module.exports = router;
