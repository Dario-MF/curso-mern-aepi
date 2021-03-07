var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  res.send('Ruta para la creación de usuarios');
});

module.exports = router;
