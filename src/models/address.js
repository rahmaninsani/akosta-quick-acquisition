'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'addressableId',
        constraints: false,
      });
      this.belongsTo(models.Hostel, {
        foreignKey: 'addressableId',
        constraints: false,
      });
      this.belongsTo(models.Village, {
        foreignKey: 'village_id',
      });
      this.belongsTo(models.District, {
        foreignKey: 'district_id',
      });
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
      this.belongsTo(models.Province, {
        foreignKey: 'province_id',
      });
    }
  }

  Address.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      addressableId: {
        allowNull: false,
        field: 'addressable_id',
        type: DataTypes.BIGINT.UNSIGNED,
      },
      addressableType: {
        allowNull: false,
        field: 'addressable_type',
        type: DataTypes.STRING,
      },
      detail: {
        defaultValue: null,
        type: DataTypes.TEXT,
      },
      villageId: {
        allowNull: false,
        field: 'village_id',
        references: {
          model: 'villages',
          key: 'id',
        },
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
      cityId: {
        allowNull: false,
        field: 'city_id',
        references: {
          model: 'cities',
          key: 'id',
        },
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
      modelName: 'Address',
      tableName: 'addresses',
    }
  );
  return Address;
};
