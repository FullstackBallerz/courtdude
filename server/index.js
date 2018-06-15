const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./db');
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;
const app = express();

module.exports = app;
