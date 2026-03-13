'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_usuarios.init({
    nombre: DataTypes.STRING(100),
    direccion: DataTypes.STRING(150),
    password: DataTypes.STRING(225),
    email: DataTypes.STRING(120),
    telefono: DataTypes.STRING(15),
    rol: {
      type: DataTypes.ENUM('admin', 'cliente'),
      allowNull:false,
      defaultValue: 'cliente'
    },
    fecha_registro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbc_usuarios',
  });
  return tbc_usuarios;
};