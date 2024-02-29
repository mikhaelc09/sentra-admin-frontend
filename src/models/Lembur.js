'use strict';
import {
  Model
} from 'sequelize';
export default (sequelize, DataTypes) => {
  class Lembur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Karyawan, {
        foreignKey: 'nik',
      })
    }
  }
  Lembur.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nik:{
      allowNull: false,
      type: DataTypes.STRING(10),
      // references: {model: 'karyawan', key: 'nik'}
    },
    status: {
      allowNull: false,
      type: DataTypes.SMALLINT,
      comment: '0: Menunggu, 1: Ditolak, 2: Disetujui'
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
    modelName: 'Lembur',
    timestamps: true,
    paranoid: true,
    tableName: 'lembur',
    underscored: true,
  });
  return Lembur;
};