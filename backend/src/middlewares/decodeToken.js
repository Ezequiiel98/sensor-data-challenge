const jwt = require('jsonwebtoken');
const { ENV_VARS } = require('../config');
const { Response } = require('../utils');

const decodeToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return Response.error({
      res,
      message: 'You must send a token',
      error: 'unauthorizated',
      status: 401,
      knowError: true,
    });
  }

  try {
    const tokenDecoded = jwt.verify(token, ENV_VARS.SECRET_JWT);
    req.userId = tokenDecoded.id;
    req.tokenUuid = tokenDecoded.uuid;

    return next();
  } catch {
    return Response.error({
      res,
      message: 'Invalid token',
      error: 'invalid token',
      status: 403,
      knowError: true,
    });
  }
};

module.exports = decodeToken;
