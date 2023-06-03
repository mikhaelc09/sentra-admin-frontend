'use strict';

/** @type {import('sequelize-cli').Migration} */

const data = []
const nik = [
  '1730864768',
  '9963175781',
  '1584121275',
  '5302114083',
  '3355937550',
  '8516922861',
  '5931879324',
  '3320064458',
  '1149715837',
  '7944292755',
]
const position = {
  longitude: 112.76215,
  latitude: -7.32027,
}

for (let i = 0; i < 10; i++) {
  const date = new Date(2023,5,i + 1)
  const round = Math.floor(Math.random() * 4)
  for (const n of nik) {
    for (let j = 0; j < round; j++) {
      data.push({
        nik: n,
        longitude: position.longitude + (Math.random() * 0.01),
        latitude: position.latitude + (Math.random() * 0.01),
        is_lembur: Math.floor(Math.random() * 2),
        keterangan: 'Hadir',
        status: Math.floor(Math.random() * 2),
        created_at: date,
      })
    }
  }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Absensi', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Absensi', null, {});
  }
};
