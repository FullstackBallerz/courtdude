const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Alias: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'Lebron James'
  }
});

module.exports = User;
