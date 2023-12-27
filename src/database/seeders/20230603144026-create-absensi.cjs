"use strict";

/** @type {import('sequelize-cli').Migration} */

const data = [];
const lembur = [];
const nik = [
  "1730864768",
  "9963175781",
  "1584121275",
  "5302114083",
  "3355937550",
  "8516922861",
  "5931879324",
  "3320064458",
  "1149715837",
  "7944292755",
];
const position = {
  longitude: 112.76215,
  latitude: -7.32027,
};

let firstDay = new Date(new Date().setDate(new Date().getDate() - 9));

for (let i = 0; i < 10; i++) {
  firstDay = new Date(firstDay.setDate(firstDay.getDate() + 1));
  for (const n of nik) {
    const round = Math.floor(Math.random() * 4);
    for (let j = 0; j < round; j++) {
      const is_lembur = Math.floor(Math.random() * 2);
      if (is_lembur == 1) {
        lembur.push({
          nik: n,
          status: 2,
          created_at: firstDay,
        });
      }
      data.push({
        nik: n,
        longitude: position.longitude + Math.random() * 0.01,
        latitude: position.latitude + Math.random() * 0.01,
        is_lembur: is_lembur,
        keterangan: "Hadir",
        status: Math.floor(Math.random() * 2),
        created_at: firstDay,
      });
    }
  }
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Absensi", data, {});
    await queryInterface.bulkInsert("Lembur", lembur, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Absensi", null, {});
  },
};
