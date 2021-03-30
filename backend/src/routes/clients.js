const express = require('express');

const clientsRouter = express.Router();
const { clientsController } = require('../controllers');
const { controllerWithTryCatch } = require('../utils');

const {
  bodyValidator,
  validateToken,
  decodeToken,
} = require('../middlewares');

clientsRouter.get('/',
  [
    decodeToken,
    validateToken,
  ],
  controllerWithTryCatch({
    callback: clientsController.getAllClients,
    statusSuccess: 200,
  }));

module.exports = clientsRouter;
