'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('izin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik_pengaju:{
        allowNull: false,
        type: Sequelize.STRING(10),
        references: {model: 'karyawan', key: 'nik'}
      },
      nik_pengganti:{
        type: Sequelize.STRING(10),
        references: {model: 'karyawan', key: 'nik'}
      },
      waktu_mulai: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      waktu_selesai: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      keterangan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lokasi: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        comment: '1: Menunggu, 2: Disetujui, 3: Ditolak'
      },
      jenis: {
        allowNull: false,
        type: Sequelize.SMALLINT,
        comment: '1: Cuti, 2: MCU'
      },
      signature:{
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('izin');
  }
};