'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class carrito_detalle extends Model {
    static associate(models) {
      carrito_detalle.belongsTo(models.carritos, {
        foreignKey: 'id_carrito'
      });

      carrito_detalle.belongsTo(models.productos, {
        foreignKey: 'id_producto'
      });
    }
  }

  carrito_detalle.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'carrito_detalle',
    tableName: 'carrito_detalle'
  });

  return carrito_detalle;
};