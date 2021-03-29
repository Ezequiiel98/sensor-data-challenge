module.exports = {
  PORT_APP: process.env.APP_PORT || '3000',
  NODE_ENV: process.env.NODE_ENV,
  ENV_IS_DEV: process.env.NODE_ENV === 'development',
};
