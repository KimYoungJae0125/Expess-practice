npm install mysql;

Drop User express@localhost;
Drop Database express_test;
Drop Table Products;

Create Database express_test;

Create USER express@localhost IDENTIFIED BY '0000';

Create Table Products (
    id Int Not Null Auto_Increment
  , name Varcahr(100)
  , price Int
  , Primary Key(id)  
);

INSERT INTO Products(name, price) Values ('상품1', 1000);
INSERT INTO Products(name, price) Values ('상품2', 2000);
INSERT INTO Products(name, price) Values ('상품3', 3000);
INSERT INTO Products(name, price) Values ('상품4', 4000);

Commit;