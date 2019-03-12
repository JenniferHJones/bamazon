var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

// create connection information to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    displayInventory();
});

function displayInventory() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the items, ask user which product they want to buy
        console.table(results);
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "input",
                    // choices: function () {
                    //     var productArray = [];
                    //     for (var i = 0; i < results.length; i++) {
                    //         productArray.push(results[i].product_name);
                    //     }
                    //     return productArray;
                    // },
                    message: "Enter the product ID for the item you wish to buy."
                },
                {
                    name: "units",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
          .then(function(answer) {
            // get the information of the chosen item
            var item;
            for (var i = 0; i < results.length; i++) {
              if (results[i].item_id === parseInt(answer.choice)) {
                item = results[i];
              }
            }
            console.log(item);
        });
        connection.end();
    });
}