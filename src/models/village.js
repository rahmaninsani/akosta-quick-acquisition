'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Village extends Model {
    static associate(models) {
      this.belongsTo(models.District, {
        foreignKey: 'district_id',
      });
      this.hasMany(models.Address, {
        foreignKey: 'village_id',
      });
    }
  }

  Village.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      districtId: {
        allowNull: false,
        field: 'district_id',
        references: {
          model: 'districts',
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
      modelName: 'Village',
      tableName: 'villages',
    }
  );
  return Village;
};
