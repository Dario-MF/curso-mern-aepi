const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Petición GET /products');
});

router.get('/edit', (req, res) => {
    console.log('FECHA: ', req.fechaActual);
    res.send('Petición GET /productos/edit');
});

// localhost:3000/products/filtro?departamento=hogar&pagina=2
router.get('/filtro', (req, res) => {
    console.log(req.query);
    res.send('Dentro del filtro');
});

router.get('/:idProducto', (req, res) => {
    console.log(req.params.idProducto);
    res.send('Obtengo un único producto ' + req.params.idProducto);
});

// Peticiones POST
router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('Petición POST create');
});

module.exports = router;