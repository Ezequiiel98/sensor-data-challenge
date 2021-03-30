'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.belongsTo(models.User);
    }
  };
  Client.init({
    businessName: DataTypes.STRING,
    rucNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    zone: DataTypes.ENUM('norte', 'centro', 'sur'),
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    web: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    transitInsurance: DataTypes.ENUM('si', 'no', 'opcional'),
    transitCageInsurance: DataTypes.ENUM('si', 'no', 'opcional'),
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
