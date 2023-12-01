"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "constants",
      [
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
