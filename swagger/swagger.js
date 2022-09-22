const swaggerUi = require('swagger-ui-express')
    , swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi : "3.0.0"
      , info : {
            version : "1.0.0"
          , title : "express-swagger"
          , description: "express로 만드는 Swagger"
      }
    , servers : [
            {
                url : "http://localhost:3000"
            }
        ]    
      }
    , apis : ["./api/*.js"]
};
const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs }