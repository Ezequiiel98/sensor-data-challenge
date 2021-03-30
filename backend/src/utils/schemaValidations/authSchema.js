const { check } = require('express-validator');

const login = [
  check('username').isLength({ min: 3 }).withMessage('Username must be a string at least 3 characters'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 8 characters'),
];

module.exports = {
  login,
};
