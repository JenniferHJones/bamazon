# bamazon

## Description
This Command Line Interface application is meant to imitate Amazon where different users view or purchase products as well as add additional units or a new product. Data is housed in a MySQL database. 
___
## User Setup
1. Install MySQL on your machine, if necessary
2. Clone bamazon
3. Run NPM Install for the following dependencies
    * Console.table
    * Inquirer
    * MySQL

## User Interface - Customer View
1. Navigate to where bamazon app is saved, then enter `node bamazonCustomer.js`

2. User is asked what they want to do: View products for sale or EXIT
![console example](/images/customerView-start.png)

3. View products for sale - User sees current inventory and is asked two questions: 1. enter product ID for the item they want to buy and 2. how many units.
![console example](./images/customerView-buy.png)

4. App displays confirmation message that user bought desired number of product for total cost; user may then choose to make another purchase or EXIT
![console example](./images/customerView-final.png)

## User Interface - Manager View
1. Enter `node bamazonManager.js`

2. User is asked what they want to do: View Products for Sale, View Low Inventory, Add to Inventory, Add New Product, or EXIT
![console example](./images/managerView-start.png)

3. View Products for Sale - User sees current inventory & is asked what they want to do
![console example](./images/managerView-inventory.png)

4. View Low Inventory - User only sees inventory for items with less than 5 units & is asked what they want to do
![console example](./images/managerView-lowInventory.png)

5. Add to Inventory - User sees current inventory and is asked two questions: 1. choose a product ID to add inventory and 2. how many units to add. User receives confirmation that the product inventory was updated & is asked what they want to do
![console example](./images/managerView-addInventory.png)

6. Add New Product - User is asked what product they want to add followed by prompting user to choose a department
![console example](./images/managerView-addProduct.png)

7. User prompted to enter a price and then the number of units followed by confirmation that the inventory was updated; user is then asked what they want to do
![console example](./images/managerView-addProduct2.png)

## Technology
* Node.js
* NPM console.table
* NPM MySQL
* NPM Inquirer
* JavaScript
* MySQL Database