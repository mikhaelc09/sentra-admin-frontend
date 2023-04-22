'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Izin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Karyawan, {foreignKey: 'nik_pengaju', as: 'pengaju'});
      this.belongsTo(models.Karyawan, {foreignKey: 'nik_pengganti', as: 'pengganti'});
    }
  }
  Izin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nik_pengaju:{
      allowNull: false,
      type: DataTypes.STRING(10),
      // references: {model: 'karyawan', key: 'nik'}
    },
    nik_pengganti:{
      allowNull: false,
      type: DataTypes.STRING(10),
      // references: {model: 'karyawan', key: 'nik'}
    },
    waktu_mulai: {
      allowNull: false,
      type: DataTypes.TIME
    },
    waktu_selesai: {
      allowNull: false,
      type: DataTypes.TIME
    },
    keterangan: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      type: DataTypes.SMALLINT
    },
    jenis: {
      allowNull: false,
      type: DataTypes.SMALLINT
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    deleted_at:{
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Izin',
    timestamps: true,
    paranoid: true,
    tableName: 'izin',
    underscored: true,
  });
  return Izin;
};