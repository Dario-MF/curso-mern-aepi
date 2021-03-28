const router = require('express').Router();
const { check } = require('express-validator');
const { validarErrores, customValidators } = require('../../../middlewares/index');
const { registrarUsuario, loginUsuario } = require('../../../controller/usuarios.controller');


// Registrar usuario
router.post('/registro', [
    check('username', 'El campo nombre es requerido').notEmpty(),
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido')
        .custom(customValidators.isEmailUnicoUsuario),
    check('password')
        .notEmpty()
        .withMessage('El campo password es requerido')
        .matches(/^([a-zA-Z0-9@*#]{8,15})$/)
        .withMessage('La password es invalida'),
    validarErrores
], registrarUsuario);

// login de usuario
router.post('/login', [
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido'),
    check('password')
        .notEmpty()
        .withMessage('El campo password es requerido')
        .matches(/^([a-zA-Z0-9@*#]{8,15})$/)
        .withMessage('La password es invalida'),
    validarErrores
], loginUsuario);


module.exports = router;