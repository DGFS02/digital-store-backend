var express = require('express');
var router = express.Router();
var { Product } = require('../models');

/* Admin panel. */
router.get('/products', function (req, res, next) {
  res.render('products/form', { title: 'Products' });
});

/* Rota para a página de listagem de produto */
router.get('/products/list-all', function (req, res, next) {
  res.render('products/listAll', { title: 'Listagem de Produtos' });
});

/* Rota para a página de update de produto */
router.get('/products/:id/edit', async function (req, res, next) {
  // Pegando um produto por ID e salvando
  const product = await Product.findByPk(req.params.id);

  console.log(product);
  res.render('products/edit', { title: 'Editar Produtos', product });
});

module.exports = router;
