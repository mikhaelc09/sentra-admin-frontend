'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('absensi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik:{
        allowNull: false,
        type: Sequelize.STRING(10),
        references: {model: 'karyawan', key: 'nik'}
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      is_lembur: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        comment: '0: Belum disetujui, 1: Disetujui, 2: Ditolak'
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
    await queryInterface.dropTable('absensi');
  }
};