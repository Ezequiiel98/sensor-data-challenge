const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ValidToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  ValidToken.init({
    token: DataTypes.TEXT,
    uuid: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ValidToken',
  });
  return ValidToken;
};
