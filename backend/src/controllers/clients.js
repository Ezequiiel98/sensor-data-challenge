const { ENV_VARS } = require('../config');
const { CustomError } = require('../utils');

const db = require('../models');
const Client = require('../models/client')(db.sequelize, db.Sequelize);

const getAllClients = async (req) => {
  const { userId } = req;
  const clients = await Client.findAll({ where: { userId } });

  return { clients };
};

module.exports = {
  getAllClients,
};
