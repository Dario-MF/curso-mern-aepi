const router = require('express').Router();
const Cliente = require('../models/Cliente')

// Insercion con metodo save. (actualizacion de registros)
router.get('/insert_v1', (req, res) => {
    const cliente = new Cliente();
    cliente.nombre = 'Dario';
    cliente.apellidos = 'MF';
    cliente.email = 'ferrada@gmail.com';
    cliente.cuota = 55;
    cliente.activo = true;

    cliente.save()
        .then(nuevoCliente => {
            res.json(nuevoCliente);
        })
        .catch(err => console.log(err))
});

// Insercion con método create.(creacion de nuevo registro)

router.get('/insert_v2', async(req, res)=> {
    //Cliente.create(req.body)
    const nuevoCliente = await Cliente.create ({
        nombre: 'pedro',
        apellidos: 'Perez Garcia',
        email: 'perez@mail.com',
        cuota: 33,
        activo: false
    })

    res.json(nuevoCliente);
});

// Recuperar clientes.

router.get('/find', (req, res)=> {
    Cliente.find()
        .then(clientes => res.json(clientes))
        .catch(err => console.log(err));
});

// Recuperar clientes activos.

router.get('/activos', async(req, res)=> {
    try {
        const clientes = await Cliente.find({ activo: true});

        res.json(clientes);
    } catch (error) {
        console.log(error)
    }
    
});

// Reacuperar clientes con cuota superior a 40.
// Para evaluar mas de una condicion podemos incluir mas de una condicion se ejecuta conmo and
router.get('/cuota_superior', (req, res)=> {
    Cliente.find({ 
        cuota: { $gt: 40 }//$gt = > , $gte = >=, $lt = < , $lte = <=
        // Mas condiciones = AND
    }) 
        .then(clientes => res.json(clientes))
        .catch(err => console.log(err));

});

// Recuperar con mas de una condicion.
router.get('/or', (req, res)=> {
    Cliente.find({
        $or:[// Operador para condicion OR, $and Para operador AND
            { cuota: { $lt: 40} },
            { activo: true }
        ]
    }).sort( { cuota: 1 }) // ordena respuesta en base a parametro facilitado
        .then(clientes => res.json(clientes))
        .catch(err => console.log(err))
});



module.exports = router;