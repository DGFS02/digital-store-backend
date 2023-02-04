var express = require("express");
var router = express.Router();

/* Admin panel. */
router.get("/products", function (req, res, next) {
  res.render("products/form", { title: "Products" });
});

/* Route para a página de listagem */
router.get("/products/list-all", function (req, res, next) {
  res.render("products/listAll", { title: "Listagem de Produtos" });
});

//TESTE
router.get("/", function (req, res, next) {
  res.render("admin");
});

module.exports = router;
