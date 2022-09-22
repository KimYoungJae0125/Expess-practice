const swaggerRouter = require('express').Router()
    , products = require('./api/products.js');

/**
 * @swagger
 * paths :
 *  /products :
 *  get :
 *   summary : "상품 목록 전체 조회"
 *   description : "상품 목록들을 모두 가져옵니다."
 *   tags: [Products]
 *   responses :
 *      "200":
 *        descriptions : "상품 목록 조회"
 *        content : 
 *          application/json :
 *            schema :
 *               type : object
 *               properties : 
 *                  id :
 *                    type : int
 *                    description : "상품 고유 아이디" 
 *                  name : 
 *                    type : string
 *                    description : "상품 고유 이름"
 *                  price :
 *                     type : int
 *                     description : "상품 가격"
 * 
 */
swaggerRouter.get("/products", products.get)

module.exports = swaggerRouter;