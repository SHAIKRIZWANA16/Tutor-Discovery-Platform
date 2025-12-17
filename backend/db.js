const mysql = require('mysql2');

// 1) MySQL connection settings
// Change user and password to match your MySQL setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL user
  password: 'your_pswd', // your MySQL password
  database: 'tutor_app' // database you created
});
exports.db = db;
