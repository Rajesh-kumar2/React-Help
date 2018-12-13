var express = require('express');
var router = express.Router();

var da = require('../dataaccess/index');

// Enabling CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

router.get('/products', function (req, res, next) {
  da.getAllProducts(function (data) {
    res.send(data);
  });
});

module.exports = router;