'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('karyawan', {
      nik: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      alamat: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tanggal_lahir: {
        allowNull: false,
        type: Sequelize.DATE
      },
      no_telp: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      no_rekening: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      nama_rekening: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      id_divisi: {
        allownull: false,
        type: Sequelize.INTEGER,
        references: {model: 'divisi', key: 'id'}
      },
      status: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      is_admin: {
        allowNull: false,
        type: Sequelize.SMALLINT
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
    await queryInterface.dropTable('karyawan');
  }
};