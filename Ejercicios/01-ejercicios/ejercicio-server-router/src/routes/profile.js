var express = require('express');
var router = express.Router();



// GET /profile/main:
router.get('/main', (req, res, next) => {
    res.send('Ruta: "/profile/main"');
});

// GET /profile/details:
router.get('/details', (req, res, next) => {
    res.send('Ruta: "/profile/details"');
});




module.exports = router;