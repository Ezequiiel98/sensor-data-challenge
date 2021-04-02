const bcrypt = require('bcryptjs');

const encryptPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [{
    username: 'test',
    password: encryptPassword('123456789'),
    email: 'test@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
