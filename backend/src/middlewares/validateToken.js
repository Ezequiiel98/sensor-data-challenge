const { Response } = require('../utils');

const db = require('../models');
const ValidToken = require('../models/validtoken')(db.sequelize, db.Sequelize);

const validateToken = async (req, res, next) => {
  const { tokenUuid } = req;

  const token = await ValidToken.findOne({ where: { uuid: tokenUuid } });

  if (!token) {
    return Response.error({
      res,
      message: 'Token expired',
      status: 403,
      error: 'token expired',
      knowError: true,
    });
  }

  return next();
};

module.exports = validateToken;
