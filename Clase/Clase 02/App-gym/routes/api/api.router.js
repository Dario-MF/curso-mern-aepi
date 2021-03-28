const router = require('express').Router();

const { esTokenValido } = require('../../middlewares/validarUsuario');
const clienteApiRouter = require('./clientes/cliente.router');
const usuarioApiRouter = require('./usuarios/usuario.router');




router.use('/clientes', clienteApiRouter);
router.use('/usuarios', usuarioApiRouter);




module.exports = router;