const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('products/list',{
        title: 'Mi server',
        mensaje:'Products',
        numProductos: 5,
        nombres: ['Mario', 'Dario', 'Pedro', 'Marcos'],
        activo: true
    });
});

router.get('/edit', (req, res) => {
    console.log('FECHA: ', req.fechaActual);
    res.render('products/edit',{
        title: 'Mi server',
        mensaje:'Products | Edit',
        numProductos: 5,
        nombres: ['Mario', 'Dario', 'Pedro', 'Marcos'],
        activo: true
    });
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

export MONGO_PATH="/usr/local/mongodb"

export PATH="$PATH:$MONGO_PATH/bin"