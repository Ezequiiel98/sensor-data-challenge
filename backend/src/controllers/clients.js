const { Op } = require('sequelize');

const { ENV_VARS } = require('../config');
const { CustomError } = require('../utils');

const db = require('../models');
const Client = require('../models/client')(db.sequelize, db.Sequelize);

const getClient = async (req) => {
  const { userId = 1 } = req;
  const { id } = req.params;
  const client = await Client.findOne({
    where: {
      [Op.and]: [
        { id },
        { userId },
      ],
    },
    attributes: { exclude: ['userId', 'createdAt', 'updatedAt'] },
  });

  if (!client) {
    throw new CustomError({
      status: 404,
      message: `Client with the id ${id} not found.`,
    });
  }

  return { client };
};

const getAllClients = async (req) => {
  const { userId = 1 } = req;
  const clients = await Client.findAll({ where: { userId }, attributes: { exclude: ['createdAt', 'updatedAt', 'userId'] } });

  return { clients };
};

const createClient = async (req) => {
  delete req.body.id;
  const { userId = 1 } = req;

  const client = await Client.create({ ...req.body, userId });

  return { client };
};

const updateClient = async (req) => {
  delete req.body.id;
  const { userId = 1 } = req;
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
  const { userId = 1 } = req;
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
  getClient,
  getAllClients,
  createClient,
  updateClient,
  deleteClient,
};
