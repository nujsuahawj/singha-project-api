const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "singha_projects", // DATABASE NAME
    password: "mysql", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;