'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: 'role_id',
      });
      this.hasMany(models.Hostel, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Address, {
        foreignKey: 'addressableId',
        constraints: false,
        scope: {
          addressableType: 'App\\Models\\User',
        },
        as: 'Address',
      });
    }
  }

  User.init(
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      slug: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gender: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      relationship: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      phone: {
        defaultValue: null,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isVerified: {
        allowNull: false,
        defaultValue: 0,
        field: 'is_verified',
        type: DataTypes.TINYINT(1),
      },
      roleId: {
        allowNull: false,
        field: 'role_id',
        references: {
          model: 'roles',
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
      modelName: 'User',
      tableName: 'users',
    }
  );
  return User;
};
