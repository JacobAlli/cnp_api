'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.STRING
  }, {});
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};