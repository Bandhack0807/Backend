'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carrito_detalle', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_carrito: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carritos',
          key: 'id'
        }
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'productos',
          key: 'id'
        }
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precio_unitario: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('carrito_detalle');
  }
};