const Response = require('./Response');

const controllerWithTryCatch = ({
  callback,
  statusSuccess,
}) => async (req, res, ...restParams) => {
  try {
    const data = await callback(req, res, ...restParams);

    Response.success({
      res,
      data,
      status: statusSuccess,
    });
  } catch (error) {
    Response.error({
      res,
      error,
      message: error.message || 'unknow error',
      status: error.status || 500,
    });
  }
};

module.exports = controllerWithTryCatch;
