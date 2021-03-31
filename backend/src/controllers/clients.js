const { ENV_VARS } = require('../config');
const { CustomError } = require('../utils');

const db = require('../models');
const Client = require('../models/client')(db.sequelize, db.Sequelize);

const getAllClients = async (req) => {
  const { userId } = req;
  const clients = await Client.findAll({ where: { userId } });

  return { clients };
};

const createClient = async (req) => {
  delete req.body.id;
  const { userId } = req;

  const client = await Client.create({ ...req.body, userId });

  return { client };
};

module.exports = {
  getAllClients,
  createClient,
};
