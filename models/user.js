
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isAlphanumeric: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [6],
          },
        },
      },
      {
        sequelize,
        modelName: 'user',
      }
    );
  }

  static async beforeCreate(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return user;
  }

  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = User;
