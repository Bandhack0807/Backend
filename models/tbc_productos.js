'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    static associate(models) {
      productos.belongsTo(models.categorias, {
        foreignKey: 'id_categoria'
      });

      productos.hasMany(models.carrito_detalle, {
        foreignKey: 'id_producto'
      });
    }
  }

  productos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productos',
    tableName: 'productos'
  });

  return productos;
};