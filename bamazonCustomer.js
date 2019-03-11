var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection information to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // check to see if connected to sql db
    // console.log('connected as id ' + connection.threadId);
    connection.end();
    displayInventory();
  });

  function displayInventory() {
      inquirer
      .prompt({
          
      })
  }