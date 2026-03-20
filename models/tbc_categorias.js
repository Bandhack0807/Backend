'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    static associate(models) {
      categorias.hasMany(models.productos, {
        foreignKey: 'id_categoria'
      });
    }
  }

  categorias.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
    tableName: 'categorias'
  });

  return categorias;
};