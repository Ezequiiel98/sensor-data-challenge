const { validationResult } = require('express-validator');
const { Response } = require('../utils');

const bodyValidator = (validations) => async (req, res, next) => {
  await Promise.all(
    validations.map((validation) => validation.run(req)),
  );

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const error = errors.array()[0].msg;

  return Response.error({
    res, error, message: error, status: 400,
  });
};

module.exports = bodyValidator;
