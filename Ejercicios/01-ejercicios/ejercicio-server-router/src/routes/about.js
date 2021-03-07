var express = require('express');
var router = express.Router();



// GET /about:
router.get('/', (req, res, next) => {
    res.send('Ruta: "/about"');
});




module.exports = router;