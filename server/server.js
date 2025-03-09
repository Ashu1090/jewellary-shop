// db.js

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'product' // Ensure this matches an existing database name
});

// Check if the connection is successful
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Database connected successfully!');
        connection.release();
    }
});

module.exports = pool.promise();
