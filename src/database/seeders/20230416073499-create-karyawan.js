'use strict';

const faker = require('@faker-js/faker').faker
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
  const fn = faker.name.firstName()
  const ln = faker.name.lastName()
  const email = faker.internet.email(fn, ln);
  data.push({
    nik: nik[i],
    nama: `${fn} ${ln}`,
    email: email,
    password: '123',
    alamat: faker.address.streetAddress(),
    tanggal_lahir: faker.date.birthdate(),
    no_telp: faker.phone.number('###-###-####'),
    no_rekening: faker.finance.creditCardNumber('##########'),
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
