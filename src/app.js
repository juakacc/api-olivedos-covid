const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const olivedosRoutes = require('./controllers/olivedos');
const paraibaRoutes = require('./controllers/paraiba');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/', olivedosRoutes);
app.use('/pb', paraibaRoutes);

module.exports = app;
