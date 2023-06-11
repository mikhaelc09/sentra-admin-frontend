"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "constants",
      [
        {
          name: "gaji_pokok",
          valuetype: 2,
          intvalue: 2_000_000,
          shortdesc: "Gaji Pokok",
        },
        {
          name: "tunjangan_perusahaan",
          valuetype: 2,
          intvalue: 1_000_000,
          shortdesc: "Tunjangan Perusahaan",
        },
        {
          name: "makan",
          valuetype: 2,
          intvalue: 15_000,
          shortdesc: "Uang Makan",
        },
        {
          name: "transportasi",
          valuetype: 2,
          intvalue: 15_000,
          shortdesc: "Uang Transportasi",
        },
        {
          name: "fee_lembur",
          valuetype: 2,
          intvalue: 25_000,
          shortdesc: "Fee Lembur",
        },
        {
          name: "fee_mcu",
          valuetype: 2,
          intvalue: 25_000,
          shortdesc: "Fee MCU",
        },
        {
          name: "bpjs_kesehatan",
          valuetype: 2,
          intvalue: 100_000,
          shortdesc: "BPJS Kesehatan",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("constants", null, {});
  },
};
