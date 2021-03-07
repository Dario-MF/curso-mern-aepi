var express = require('express');
var router = express.Router();



// GET home:
router.get('/', (req, res, next) => {
    res.send('Ruta: "/"');
});




module.exports = router;