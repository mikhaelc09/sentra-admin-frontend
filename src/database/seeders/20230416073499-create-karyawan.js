'use strict';

const faker = require('@faker-js/faker')
faker.setLocale('id_ID')

const data = []

for (let i = 0; i < 20; i++) {
  const fn = faker.name.firstName()
  const ln = faker.name.lastName()
  const email = faker.internet.email(fn, ln);
  data.push({
    nik: faker.random.numeric(10),
    nama: `${fn} ${ln}`,
    email: email,
    password: '123',
    alamat: faker.address.streetAddress(),
    tanggal_lahir: faker.date.birthDate(),
    no_telp: faker.phone.number(),
    no_rekening: faker.finance.creditCardNumber(),
    nama_rekening: `${fn} ${ln}`,
    id_divisi: faker.datatype.number({ min: 1, max: 16}),
    status: 1,
    is_admin: faker.datatype.number({ min: 0, max: 1}),
    created_at: new Date(),
    updated_at: new Date(),
  })
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('karyawan', data, {} );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('karyawan', null, {});
  }
};
