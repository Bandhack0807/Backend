'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class carritos extends Model {
    static associate(models) {
      carritos.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      });

      carritos.hasMany(models.carrito_detalle, {
        foreignKey: 'id_carrito'
      });
    }
  }

  carritos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER,
    fecha_creacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'carritos',
    tableName: 'carritos'
  });

  return carritos;
};