class CustomError extends Error {
  constructor(data = {}) {
    const message = typeof data === 'string' ? data : data.message;
    super(message || 'unknow error');
    this.name = 'CustomError';
    this.status = data.status || 500;
  }
}

module.exports = CustomError;
