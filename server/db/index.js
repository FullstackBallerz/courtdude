const db = require('./db');
const User = require('./models/Users');
const Court = require('./models/Courts');

User.belongsTo(Court);
Court.hasMany(User);

module.exports = {
  db,
  User,
  Court
};
