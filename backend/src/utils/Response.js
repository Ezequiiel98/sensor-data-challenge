class Response {
  static success({ res, data = {}, status = 200 }) {
    return res.status(status).send({
      ok: true,
      status,
      data,
    });
  }

  static error({
    res,
    error,
    message,
    status,
  }) {
    console.log(error);
    const resMessage = error.name === 'CustomError' ? message : 'unknow error';

    return res.status(status).send({
      ok: false,
      status,
      data: {
        message: resMessage,
      },
    });
  }
}

module.exports = Response;
