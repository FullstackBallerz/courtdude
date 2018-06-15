'use strict';

const Sequelize = require('sequelize');

const chalk = require('chalk');

console.log(chalk.green('Opening database connection'));

const db = new Sequelize(`postgres://localhost:5432/ballz`, {
  logging: false
});

module.exports = db;
