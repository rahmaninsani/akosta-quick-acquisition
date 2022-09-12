'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.Address, {
        foreignKey: 'district_id',
      });
    }
  }

  District.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      cityId: {
        allowNull: false,
        field: 'city_id',
        references: {
          model: 'cities',
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
      modelName: 'District',
      tableName: 'districts',
    }
  );
  return District;
};
