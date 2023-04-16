'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Karyawan.init({
    nik: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tanggal_lahir: DataTypes.DATE,
    no_telp: DataTypes.STRING,
    status: DataTypes.SMALLINT,
    keterangan: DataTypes.TEXT,
    is_admin: DataTypes.SMALLINT,
    id_divisi: DataTypes.NUMBER,
    id_jabatan: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Karyawan',
  });
  return Karyawan;
};