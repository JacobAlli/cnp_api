var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/orders', function(req, res, next) {
  db.Order.findAll().then((result) => {
  	res.send(result);
  });
});

router.get('/', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
