'use strict';
import {
  Model
} from 'sequelize' ;
export default (sequelize, DataTypes) => {
  class Constant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Constant.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    valuetype: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: '1: string, 2: integer, 3: float'
    },
    stringvalue: {
      type: DataTypes.STRING(30),
    },
    intvalue: {
      type: DataTypes.INTEGER
    },
    floatvalue: {
      type: DataTypes.FLOAT
    },
    shortdesc: {
      type: DataTypes.STRING(50)
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
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Constant',
    timestamps: true,
    paranoid: true,
    tableName: 'constants',
    underscored: true,
  });
  return Constant;
};