const express = require('express');

const clientsRouter = express.Router();
const { clientsController } = require('../controllers');
const { controllerWithTryCatch } = require('../utils');
const { clientSchema } = require('../utils/schemaValidations');

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

clientsRouter.post('/',
  [
    decodeToken,
    validateToken,
    bodyValidator(clientSchema.client),
  ],
  controllerWithTryCatch({
    callback: clientsController.createClient,
    statusSuccess: 201,
  }));

clientsRouter.put('/:id',
  [
    decodeToken,
    validateToken,
    bodyValidator(clientSchema.client),
  ],
  controllerWithTryCatch({
    callback: clientsController.updateClient,
    statusSuccess: 201,
  }));

clientsRouter.delete('/:id',
  [
    decodeToken,
    validateToken,
  ],
  controllerWithTryCatch({
    callback: clientsController.deleteClient,
    statusSuccess: 201,
  }));

module.exports = clientsRouter;
