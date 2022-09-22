const router = require('express').Router();

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: 상품
 */
router.get('', (req, res) => {
    // connection.connect();
    // connection.query('Select * from Products', (error, rows, fields) => {
    //     try {
    //         const {id, name, price} = rows[0];
    //         console.log(id, name, price);
    //         res.json(rows);
    //     } catch {
    //         console.log(error);
    //     }
    // })
    // connection.end();
    res.send("hello");
});

router.post('', (req, res) => {

});

router.patch('', (req, res) => {

});

router.delete('', (req, res) => {

});


module.exports = router;