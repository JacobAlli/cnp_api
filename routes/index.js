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
  db.sequelize.query('SELECT * FROM OrderDetails LEFT JOIN Products ON OrderDetails.product_id = Products.product_id', {raw:true}).then((result) => {
 res.send(result[0]);
  });
});


router.get('/users', function(req, res, next) {
  db.User.findAll().then((result) => {
  	res.send(result);
  });
});

router.post("/add/cart", function(req, res) {
  db.OrderDetail.create({
      product_id: req.body.products_id, user_id: req.body.user_id, order_id: req.body.order_id });
   // function(result) {
    console.log('added item to user cart');
  // });
  res.sendStatus(200);
 });

 router.post("/add/order", function(req, res) {
  db.Order.create({
      user_id: req.body.user_id, total: req.body.total, description: req.body.description });
   // function(result) {
    console.log('added order to order table');
  // });
  res.sendStatus(200);
 });

  router.post("/add/user", function(req, res) {
  db.User.create({
      firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, phone: req.body.phone, fbId: req.body.fbId })
  .then((result) => {
        console.log('added user to user table');
        res.sendStatus(200).json(result);
      });
 });

//  router.post('/update/OrderDetails', function(req, res){
//   var ajaxData = req.body;
//   // var dataLength = Object.keys(ajaxData).length;
//   // console.log(Object.keys(ajaxData).length);
//   // for(i=0; i< dataLength/5; i++){
//       var cartID = ajaxData[`data[${i}][cartID]`];
//       var qty = ajaxData[`data[${i}][qty]`];
//       console.log(cartID);
//       function findAndUpdate(cartID, qty, cb){
//           db.OrderDetails.findById(cartID).then((row) => {
//               cb(cartID, qty, row);
//           });
//       }
//       findAndUpdate(cartID, qty, function(cartID, qty, row){
//           row.qty = qty;
//           row.save();
//       });

//   res.send(200);
// });


// router.post('/remove/OrderDetails', function(req, res){
//   console.log(req.body);
//   db.OrderDetail.findOne({
//      where: {
//          id: parseInt(req.body.data)
//      }
//  })
// //  .then(function(cart) {
// //      cart.destroy();
// //      res.send('carts')
// //  });
// });

router.get('/', function(req, res, next) {
  res.send('hello fellow picklers');
});

module.exports = router;

