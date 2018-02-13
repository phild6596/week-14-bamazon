DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER (10) NOT NULL,
    stock_quantity Integer(30)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('S"WELL Water Bottle', 'Recreation', 30, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Lens Cleaner', 'Vision', 3, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Makers Mark', 'Beverages', 35, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Tents', 'Recreation', 100, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Aviator Sunglasses', 'Vision', 130, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Shampoo', 'Health and Beauty', 8, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Levi"s', 'Clothing', 40, 22);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Laptop Case', 'Computing', 20, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Apple MacBook', 'Computing', 1000, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('The Beatles T-Shirt', 'Clothing', 25, 53);

SELECT *
FROM products
