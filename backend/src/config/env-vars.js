require('dotenv').config();

module.exports = {
  PORT_APP: process.env.PORT_APP || '3000',
  NODE_ENV: process.env.NODE_ENV,
  ENV_IS_DEV: process.env.NODE_ENV === 'development',
  SECRET_JWT: process.env.SECRET_JWT || 'th1s1s_jwt_b35t_53cr3t',
  DB: {
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'default',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_POST: process.env.DB_PORT || '3306',
  },
};
