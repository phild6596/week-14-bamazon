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
    console.log("Connected!");
})


function bamazonStore(err, buyAllTheThings) {   
connection.query('SELECT * FROM products', (err, rows) => {
    if (err) throw err;
    console.log('Data received from Db:\n');
    console.log(rows);
});

}



function buyAllTheThings() {
inquirer
    .prompt([
        {
            name:'purchase',
            message:'What would you like to purchase?'
        },
        {
            name:'buy',
            message:'How many?'
        }
    ]).then(function (answer) {
        console.log(`Item(s): ${answer.purchase}`);
        console.log(`Quantity: ${answer.buy}`);
    });
}