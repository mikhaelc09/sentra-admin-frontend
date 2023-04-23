"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lokasi_penting", [
      {
        nama: 'JL. Raya tenggilis 135 B (SMS)',
        longitude: 112.76215,
        latitude: -7.32027,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'PT.UNILEVER INDONESIA (Jl. Rungkut Industri IV No.5-11)',
        longitude: 112.75773,
        latitude: -7.33323,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'JL.DUKUH MENANGGAL NO 122-124 (BPJS DR.SOESANTO)',
        longitude: 112.72572,
        latitude: -7.34277,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'PT. Tri Sakti Purwosari Makmur (KT&G) Jl. Raya Surabaya No. 341',
        longitude: 112.73407,
        latitude: -7.21198,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'PT.PJBS Jl. Raya Bandara Juanda No.17',
        longitude: 112.76911,
        latitude: -7.37024,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'Klinik Nayaka (Jl. R.A Kartini No. 130-132)',
        longitude: 112.73269,
        latitude: -7.27858,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'KPJB (PLTU Tanjung Jati B Unit 3 & 4)',
        longitude: 110.75495,
        latitude: -6.46602,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'PT.Tunggal Djaja Indah (Jl. Letjen Suprapto No.26)',
        longitude: 112.76563,
        latitude: -7.35648,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'Jl. Raya Sukodono No XX (MPM Gedangan)',
        longitude: 112.67346,
        latitude: -7.3957,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'KT&G Purwosari',
        longitude: 112.47753,
        latitude: -6.97378,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nama: 'JL. Raya tenggilis 135 B (SMS)',
        longitude: 112.77095,
        latitude: -7.31914,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lokasi_penting", null, {});
  },
};
