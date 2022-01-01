const mysql = require("mysql2");

// Connect to database w/ verification
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees'
});

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;