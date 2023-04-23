'use strict';

const faker = require('@faker-js/faker')
faker.setLocale('id_ID')

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

for (let i = 0; i < 10; i++) {
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'SENIN',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'SELASA',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'RABU',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'KAMIS',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'JUMAT',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
  data.push({
    nik: nik[i],
    id_lokasi: faker.dataype.number({ min: 1, max: 11 }),
    hari: 'SABTU',
    jam_kerja: faker.dataype.number({ min: 5, max: 10}),
    created_at: new Date(),
    updated_at: new Date(),
  })
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jadwal', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jadwal', null, {});
  }
};
