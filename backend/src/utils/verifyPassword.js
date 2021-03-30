const bcrypt = require('bcryptjs');

const verifyPassword = (password, passwordHashed) => bcrypt.compareSync(password, passwordHashed);

module.exports = verifyPassword;
