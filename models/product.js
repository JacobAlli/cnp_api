'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING,
    cost: DataTypes.DOUBLE
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};