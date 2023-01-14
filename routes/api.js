var express = require('express');
var router = express.Router();


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
