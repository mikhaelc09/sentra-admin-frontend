'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('d_penggajian', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_header:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'h_penggajian', key: 'id'}
      },
      judul: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      jumlah: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nominal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      subtotal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deleted_at:{
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('d_penggajian');
  }
};