const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect((err) =>{
    if (err) throw err;
});

function bamazonStore() {
    connection.query('SELECT * FROM products', (err, rows) => {
        if (err) throw err;
        console.log('Welcome to our store, please choose from id number:\n');
        console.log(rows);
        searchBamazon();
    });
}

function startBamazon() {
    inquirer.prompt([{
        name: 'bamazon',
        type: 'confirm',
        message: 'Would you like to purchase anything from Bamazon?'
    }]).then(function (answer) {
        if (answer.bamazon) {
            console.log('Welcome to Bamazon, please select from below: ');
            bamazonStore();
        } else {
            console.log('Thank you for visiting, see you soon.');
            connection.end((err) => {
                if (err) throw err;
                console.log('Connection Closed.');
            });
            return false;
        }
    })
}

function searchBamazon() {
    inquirer
        .prompt([
            {
                name: 'purchase',
                message: 'What item number would you like to purchase?'
            },
            {
                name: 'buy',
                message: 'How many?'
            }
        ]).then(function (answer) {
            var itemSearched = answer.purchase;
            var itemsBought = answer.buy;
            console.log(`Item(s): ${itemSearched}`);
            console.log(`Quantity: ${itemsBought}`);
            buyBamazon(itemSearched, itemsBought);
        });
}



function buyBamazon(itemSearched, itemsBought) {
    connection.query('SELECT * FROM  products WHERE id = ' + itemSearched, function (err, response) {
        if (err) {
            console.log(err);
        }
        if (itemsBought <= response[0].stock_quantity) {
            var itemsCost = response[0].price * itemsBought;
            console.log('Shipping right out, your cost is: $' + itemsCost + ', Thank you for your business!');
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + itemsBought + ' WHERE id = ' + itemSearched);
        } else {
            'Sorry, we are currently out of ' + response[0].product_name +', please check again sonn.'
        }
        startBamazon();
    })
}

startBamazon();