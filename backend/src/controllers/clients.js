const { Op } = require('sequelize');

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

const updateClient = async (req) => {
  delete req.body.id;
  const { userId } = req;
  const { id } = req.params;
  const existsClient = await Client.findOne({
    where: {
      [Op.and]: [
        { id },
        { userId },
      ],
    },
  });

  if (!existsClient) {
    throw new CustomError({
      status: 404,
      message: `Client with the id ${id} not found.`,
    });
  }

  await Client.update({ ...req.body, userId }, { where: { id } });

  return { message: `Client with id ${id} was update successfully` };
};

const deleteClient = async (req) => {
  const { userId } = req;
  const { id } = req.params;
  const existsClient = await Client.findOne({
    where: {
      [Op.and]: [
        { id },
        { userId },
      ],
    },
  });

  if (!existsClient) {
    throw new CustomError({
      status: 404,
      message: `Client with the id ${id} not found.`,
    });
  }

  await existsClient.destroy();

  return { message: `Client with id ${id} deleted successfully` };
};

module.exports = {
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
};
