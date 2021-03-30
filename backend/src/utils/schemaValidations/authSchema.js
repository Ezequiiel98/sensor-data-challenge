const { check } = require('express-validator');

const login = [
  check('username').isString().withMessage('Username must be a string'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 8 characters'),
];

module.exports = {
  login,
}
