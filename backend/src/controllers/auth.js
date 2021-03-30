const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const short = require('short-uuid');

const { ENV_VARS } = require('../config');
const { CustomError, verifyPassword } = require('../utils');

const db = require('../models');
const User = require('../models/user')(db.sequelize, db.Sequelize);
const ValidToken = require('../models/validtoken')(db.sequelize, db.Sequelize);

const login = async (req) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { username },
        { email: username },
      ],
    },
  });

  const error = new CustomError({
    message: 'Username or password is wrong',
    status: 404,
  });

  if (!user) throw error;

  const passwordsMatch = verifyPassword(password, user.password);

  if (!passwordsMatch) throw error;

  const tokenUuid = short.generate();
  const token = jwt.sign({ id: user.id, uuid: tokenUuid }, ENV_VARS.SECRET_JWT);

  const dataUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    token,
  };

  await ValidToken.create({ token, uuid: tokenUuid });

  return { user: dataUser };
};

const getMe = async (req) => {
  const { userId: id } = req;
  const attributes = ['id', 'username', 'email'];
  const user = await User.findOne({ where: id, attributes });

  return { user };
};

module.exports = {
  login,
  getMe,
};
