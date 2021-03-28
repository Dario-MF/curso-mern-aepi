const router = require('express').Router();
const { check } = require('express-validator');
const { validarErrores, validarUsuario, customValidators } = require('../../../middlewares/index');
const {
    getAllCLientes,
    getCientWithId,
    saveNewCliente,
    updateCliente,
    deleteCliente } = require('../../../controller/clientes.controller');


// Obtener clientes
router.get('/', getAllCLientes);

// Obtener cliente por id.
router.get('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(customValidators.isIdValid),
    validarErrores
], getCientWithId);

// Crear nuevo cliente
router.post('/', [
    check('nombre', 'El campo nombre es requerido').notEmpty(),
    check('apellidos', 'El campo apellido es requerido').notEmpty(),
    check('cuota', 'El campo cuota es requerido').notEmpty(),
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido')
        .custom(customValidators.isEmailUnicoCliente),
    validarErrores
], saveNewCliente);

// Modificar cliente.
router.put('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(customValidators.isIdValid),
    validarUsuario.esTokenValido,
    validarUsuario.esRolValido,
    validarErrores
], updateCliente);

// Eliminar cliente.
router.delete('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(customValidators.isIdValid),
    validarUsuario.esTokenValido,
    validarUsuario.esRolValido,
    validarErrores
], deleteCliente);




module.exports = router;