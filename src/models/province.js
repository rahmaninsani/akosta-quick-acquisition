'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    static associate(models) {
      this.hasMany(models.Address, {
        foreignKey: 'province_id',
      });
    }
  }

  Province.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        defaultValue: null,
        field: 'created_at',
        type: 'TIMESTAMP',
      },
      updatedAt: {
        defaultValue: null,
        field: 'updated_at',
        type: 'TIMESTAMP',
      },
    },
    {
      sequelize,
      modelName: 'Province',
      tableName: 'provinces',
    }
  );
  return Province;
};
