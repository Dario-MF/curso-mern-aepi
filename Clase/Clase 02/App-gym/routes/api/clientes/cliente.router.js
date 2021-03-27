const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { esRolValido } = require('../../../middlewares/validarUsuario');
const Cliente = require('../../../models/Cliente');


// Obtener todos los clientes
router.get('/', async(req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json({
            msg: 'peticion correcta',
            clientes
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error in server',
            error
        });
    };
});

// Obtener un cliente por id.
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findById(id);
        if(!cliente){
            return res.status(400).json({
                msg: `no existe cliente con id: ${id}`
            });
        };
        res.status(200).json({
            msg: 'peticion correcta',
            cliente
        })
    } catch (error) {
        res.status(500).json({
            msg: 'error en servidor',
            error
        });
    };
});

// mandar nuevo cliente.
router.post('/', [
    check('nombre', 'El campo nombre es requerido').notEmpty(),
    check('apellidos', 'El campo apellido es requerido').notEmpty(),
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido')
        .custom(async (email) => {
            const esEmailUnico = await Cliente.findOne({email});
            if(esEmailUnico){ 
                throw new Error('El email ya esta en uso');
            };
            return;
        }),
    check('dni', 'El dni es incorrecto').custom( value => {
        return (/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i).test(value);
    }),
    esRolValido
], async(req, res) => {
    // Validar errores
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({
            msg: 'error en la petición',
            error: errores.array()
        });
    };
    // Crear cliente
    const { nombre, apellidos, email, cuota, activo} = req.body;
    try {
        const newCliente = await Cliente.create({
            nombre,
            apellidos,
            email,
            cuota,
            activo
        });
        res.status(200).json({
            msg: 'cliente creado correctamente',
            newCliente
        });    
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    };
});

// modificar cliente.
router.put('/:id', esRolValido, async(req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, email, cuota, activo} = req.body;
    try {
        const clienteEditado = await Cliente.findByIdAndUpdate( id, {
            nombre,
            apellidos,
            email,
            cuota,
            activo
        }, { new: true });
        if(!clienteEditado){
            return res.status(400).json({
                msg: `no existe cliente con id: ${id}`
            });
        };
        res.status(200).json({
            msg: 'cliente modificado correctamente',
            clienteEditado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    }; 
});

// borrar cliente.
router.delete('/:id', esRolValido, async(req, res) => {
    const { id } = req.params;
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete( id );
        if(!clienteEliminado){
            return res.status(400).json({
                msg: `no existe cliente con id: ${id}`
            });
        };
        res.status(200).json({
            msg: 'cliente eliminado correctamente',
            clienteEliminado
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en el servidor',
            error
        });
    }; 
});




module.exports = router;