const cors = require('cors');
const express = require('express');

// modules
const { ENV_VARS } = require('./config');

// routes

// app
const app = express();

if (ENV_VARS.ENV_IS_DEV) {
  const dotenv = require('dotenv');
  const morgan = require('morgan');

  dotenv.config();
  app.use(morgan('dev'));
}

// app config
app.use(cors());
app.use(express.json());

app.listen(ENV_VARS.PORT_APP, () => {
  console.log(`Server on port ${ENV_VARS.PORT_APP}`);
});
