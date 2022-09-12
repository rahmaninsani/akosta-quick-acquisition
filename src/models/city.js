'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      this.belongsTo(models.Province, {
        foreignKey: 'province_id',
      });
      this.hasMany(models.Address, {
        foreignKey: 'city_id',
      });
    }
  }

  City.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      provinceId: {
        allowNull: false,
        field: 'province_id',
        references: {
          model: 'provinces',
          key: 'id',
        },
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
      modelName: 'City',
      tableName: 'cities',
    }
  );
  return City;
};
