'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.STRING
  }, {});
  OrderDetail.associate = function(models) {
	OrderDetails.belongsTo(models.Products,{
     foreignKey: 'product_id',
     targetKey: 'id',
     underscored: true
   })

  return OrderDetail;
};


