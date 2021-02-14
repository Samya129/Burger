// Set up MySQL connection:
const mysql = require('mysql');

require("dotenv").config();
// console.log(process.env.SECRETPASSWORD)

//Connect the burger_db database using a localhost connection:
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.SECRETPASSWORD,
  database: 'burger_db',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;