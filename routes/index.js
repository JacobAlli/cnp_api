var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/orders', function(req, res, next) {
  db.Order.findAll().then((result) => {
  	res.send(result);
  });
});

router.get('/products', function(req, res, next) {
  db.Product.findAll().then((result) => {
  	res.send(result);
  });
});

router.get('/locations', function(req, res, next) {
  db.Location.findAll().then((result) => {
  	res.send(result);
  });
});

router.get('/order_details', function(req, res, next) {
  db.OrderDetail.findAll().then((result) => {
  	res.send(result);
  });
});

router.get('/users', function(req, res, next) {
  db.User.findAll().then((result) => {
  	res.send(result);
  });
});


router.get('/', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
