const express = require('express');

const authRouter = express.Router();
const { controllerWithTryCatch } = require('../utils');

const {
  bodyValidator,
  validateToken,
  decodeToken,
} = require('../middlewares');
const { authSchema } = require('../utils/schemaValidations');

const { authController } = require('../controllers');

authRouter.post(
  '/login',
  bodyValidator(authSchema.login),
  controllerWithTryCatch({
    callback: authController.login,
    statusSuccess: 200,
  }),
);

authRouter.get(
  '/me',
  [
    decodeToken,
    validateToken,
  ],
  controllerWithTryCatch({
    callback: authController.getMe,
    statusSuccess: 200,
  }),
);

module.exports = authRouter;
