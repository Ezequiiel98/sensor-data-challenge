require('dotenv').config();

module.exports = {
  PORT_APP: process.env.APP_PORT || '3000',
  NODE_ENV: process.env.NODE_ENV,
  ENV_IS_DEV: process.env.NODE_ENV === 'development',
  DB: {
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'default',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_POST: process.env.DB_PORT || '3306',
  },
};
