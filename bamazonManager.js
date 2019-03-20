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

// connect to mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "EXIT"]
        })
        .then(function (answer) {
            // call specific function based on user response
            if (answer.action === "View Products for Sale") {
                viewProducts();
            } else if (answer.action === "View Low Inventory") {
                viewLowInventory();
            } else if (answer.action === "Add to Inventory") {
                addInventory();
            } else if (answer.action === "Add to Inventory") {
                addProduct();
            } else if (answer.action === "EXIT") {
                connection.end();
            } else {
                connection.end();
            }
        });
};

// function to display all products for sale
function viewProducts() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
        connection.end();
    });
};

// function to view inventory with less than 5 units
function viewLowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
        connection.end();
    });
};

// function to allow user to add units to current product list
function addInventory() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // ask user for which product they want to add units
        console.table(results);
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "input",
                    message: "Which product ID do you want to add inventory to?"
                },
                {
                    name: "units",
                    type: "input",
                    message: "How many units would you like to add?"
                }
            ])
            .then(function (answer) {
                // get the information for the chosen item
                var item;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_id === parseInt(answer.choice)) {
                        item = results[i];
                    }
                }
            })
    })
};

    // function to allow user to add new product to inventory
    function addProduct() {

    };
