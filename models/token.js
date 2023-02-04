'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      token.belongsTo(user,{
        foreignKey: 'usersId'
      })
    }
  }
  token.init({
    jwt: DataTypes.STRING,
    usersId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'token',
  });
  return token;
};