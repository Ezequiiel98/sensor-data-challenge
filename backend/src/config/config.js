const { DB } = require('./env-vars.js');

module.exports = {
  development: {
    username: DB.DB_USER,
    password: DB.DB_PASSWORD,
    database: DB.DB_NAME,
    host: DB.DB_HOST,
    port: DB.DB_PORT,
    dialect: 'mysql',
  },
  test: {
    username: DB.DB_USER,
    password: DB.DB_PASSWORD,
    database: DB.DB_NAME,
    host: DB.DB_HOST,
    port: DB.DB_PORT,
    dialect: 'mysql',
  },
  production: {
    username: DB.DB_USER,
    password: DB.DB_PASSWORD,
    database: DB.DB_NAME,
    host: DB.DB_HOST,
    port: DB.DB_PORT,
    dialect: 'mysql',
  },
};
