const db = require('../config/db');

const User = {};

User.findByEmail = (email, callback) => {
    const sql = 'SELECT * FROM usuario WHERE id = ?';
    db.query(sql, [email], (err, result) => {
        if (err) throw err;
        callback(result[0]);
    });
};

User.create = (userData, callback) => {
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(sql, [userData.email, userData.password], (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

module.exports = User;
