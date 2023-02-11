var express = require('express');
var router = express.Router();

/* Admin panel. */
router.get('/products', function (req, res, next) {
  res.render('products/form', { title: 'Products' });
});

router.get('/users', function (req, res, next) {
  res.render('register', { title: 'Cadastro de Usuarios' });
});

module.exports = router;
