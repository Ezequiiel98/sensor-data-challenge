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

    return res.status(status).send({
      ok: false,
      status,
      data: {
        message,
      },
    });
  }
}

module.exports = Response;
