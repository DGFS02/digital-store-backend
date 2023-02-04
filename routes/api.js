
var express = require("express");
var router = express.Router();
var { Product } = require("../models");

router.get("/products", async (req, res, next) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get("/products/:id", async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId)

  res.json(product);
});

router.post('/products', function(req, res, next) {
  const { Product } = require('../models');
  const newProduct = Product.build({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
  
  newProduct.save().then((createdProduct) => {
    res.status(201)
    res.json(createdProduct)
  })
  
});

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   req.session.user = {
//     username: username
//   };

//   res.redirect("/");
// });

module.exports = router;
