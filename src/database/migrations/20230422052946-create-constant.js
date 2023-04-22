'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('constants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        comment: '1: string, 2: integer, 3: float'
      },
      stringvalue: {
        type: Sequelize.STRING(30),
      },
      intvalue: {
        type: Sequelize.INTEGER
      },
      floatvalue: {
        type: Sequelize.FLOAT
      },
      shortdesc: {
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('constants');
  }
};