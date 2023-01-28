var express = require("express");
var router = express.Router();


/* Admin panel. */
router.get("/products", function (req, res, next) {
  res.render("products/form", { title: "Products" });
});

module.exports = router;
