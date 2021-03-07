var express = require('express');
var router = express.Router();



// GET /contact:
router.get('/', (req, res, next) => {
    res.send('Ruta: "/contact"');
});




module.exports = router;