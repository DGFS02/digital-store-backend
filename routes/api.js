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

router.get('/products', function(req, res, next) {
  res.json([
    {
        "productId": 1,
        "productName": "Produto 1"
        },
        {
        "productId": 2,
        "productName": "Produto 2"
        },
        {
        "productId": 3,
        "productName": "Produto 3"
        },
        {
        "productId": 4,
        "productName": "Produto 4"
        },
        {
        "productId": 5,
        "productName": "Produto 5"
        },
        {
        "productId": 6,
        "productName": "Produto 6"
        }
  ]);
});


module.exports = router;
