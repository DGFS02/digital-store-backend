const express = require('express');
const router = express.Router();

router.post('/products', function(req, res, next) {
  const { Product } = require('../models');
  const newProduct = Product.build({
    name: 'asdasd',
    price: 312312,
    description: '312312',
  })

  newProduct.save().then((createdProduct) => {
    res.status(201)
    res.json(createdProduct)
  })

});

module.exports = router;
