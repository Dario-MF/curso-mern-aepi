var express = require('express');
var router = express.Router();



// GET /info:
router.get('/', (req, res, next) => {
    res.send('Ruta: "/info"');
});




module.exports = router;