var express = require('express');
var router = express.Router();

router.get('/products', function (req, res, next) {
  res.render('products/form', { title: 'Products' });
});

router.get('/login', function (req, res, next) {
  res.render('auth/login', { title: 'Login' });
});

router.get('/users', function (req, res, next) {
  res.render('register', { title: 'Cadastro de Usuarios' });
});

router.get("/products/list-all", function (req, res, next) {
  res.render("products/listAll", { title: "Listagem de Produtos" });
});

module.exports = router;
