const { Op } = require('sequelize');
const { ENV_VARS } = require('../config');
const { CustomError } = require('../utils');

const db = require('../models');
const Client = require('../models/client')(db.sequelize, db.Sequelize);

const getAllClients = async (req) => ({ clients: [] });

module.exports = {
  getAllClients,
};
