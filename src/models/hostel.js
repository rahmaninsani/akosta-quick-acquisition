'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hostel extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Address, {
        foreignKey: 'addressableId',
        constraints: false,
        scope: {
          addressableType: 'App\\Models\\Hostel',
        },
      });
    }
  }

  Hostel.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        type: DataTypes.BIGINT.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      slug: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gender: {
        defaultValue: null,
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
      modelName: 'Hostel',
      tableName: 'hostels',
    }
  );
  return Hostel;
};
