'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING(225)
      },
      email: {
        type: Sequelize.STRING(120)
      },
      telefono: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.ENUM('admi', 'cliente'),
        allowNull: false,
        defaultValue: 'cliente'
      },
      fecha_registro: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbc_usuarios');
  }
};