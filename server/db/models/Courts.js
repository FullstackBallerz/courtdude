const db = require('../db');
const Sequelize = require('sequelize');

const Court = db.define('court', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  custom: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Court;
