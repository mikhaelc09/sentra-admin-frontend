'use strict';
const faker = require('@faker-js/faker').faker
faker.setLocale('id_ID')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('divisi', [
      {
        nama:'DOKTER',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'AUDIT',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'ANALIS',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'APOTIK',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'FINANCE',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'ACCOUNTING',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'ADMIN',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'KASIR',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'K3',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'RADIOLOGI',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'MARKETING',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'PERAWAT',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'UMUM',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'DRIVER',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'HRD',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nama:'APOTEK',
        tunjangan: faker.finance.amount(10, 999) * 100000,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('divisi', null, {}); 
  }
};
