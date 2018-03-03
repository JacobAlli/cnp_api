'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    product_id: DataTypes.STRING,
    product_description: DataTypes.STRING,
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING,
    cost: DataTypes.DOUBLE
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};