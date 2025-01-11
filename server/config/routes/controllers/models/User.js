const db = require('../config/db');

const User = {};

User.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

User.create = (user) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users SET ?', user, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = User;