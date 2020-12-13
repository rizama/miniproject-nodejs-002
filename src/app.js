const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const db = require("../models");

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  console.log("Mysql Connected");
}).catch((error) => {
  console.error(`Error: MYSQL is Down, ${error.message}`)
});

app.get('/', (req, res) => {
  res.json({
    message: 'Technical Test - Back End Developer (NodeJS) PT Fatiha sakti (Gadjian.com)'
  });
});

app.use('/api', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

exports.db = db;

module.exports = app;
