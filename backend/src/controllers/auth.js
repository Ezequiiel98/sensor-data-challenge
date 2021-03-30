const { Op } = require('sequelize');

const { CustomError, verifyPassword } = require('../utils');

const db = require('../models');
const User = require('../models/user')(db.sequelize, db.Sequelize);

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

  const dataUser = {
    id: user.id,
    username: user.username,
    email: user.email,
  };

  return { user: dataUser };
};

module.exports = {
  login,
};
