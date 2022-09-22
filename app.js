const express = require('express')
, mysql = require('mysql')
, app = express()
, { swaggerUi, specs } = require('./swagger/swagger')
, port = 3000;

const host = 'localhost'
    , user = 'express'
    , password = '0000'
    , database = 'express_test'; 


const connection = mysql.createConnection({
    host
  , user
  , password
  , database
});

app.listen(port, () => {
    console.log(`port open ${port}`);
})

const product = require('./api/products');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/products', product);