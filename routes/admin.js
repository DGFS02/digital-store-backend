var express = require('express');
var router = express.Router();

/* Admin panel. */
router.get('/products', function (req, res, next) {
  res.render('products/form', { title: 'Products' });
});


/* Rota para a página de listagem de produto */
router.get("/products/list-all", function (req, res, next) {
  res.render("products/listAll", { title: "Listagem de Produtos" });
});

/* Rota para a página de update de produto */
router.get("/products/edit", function (req, res, next) {
  res.render("products/edit", { title: "Editar Produtos" });
});

module.exports = router;
