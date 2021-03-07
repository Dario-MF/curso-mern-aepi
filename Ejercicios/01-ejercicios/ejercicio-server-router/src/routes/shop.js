var express = require('express');
var router = express.Router();


// GET /shop:
router.get('/', (req, res, next) => {
    res.send('Ruta: "/shop"');
});

// GET /shop/house:
router.get('/house', (req, res, next) => {
    res.send('Ruta: "/house"');
});



module.exports = router;