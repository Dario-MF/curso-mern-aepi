const router = require('express').Router();

const { esTokenValido } = require('../../middlewares/validarUsuario');
const clienteApiRouter = require('./clientes/cliente.router');
const usuarioApiRouter = require('./usuarios/usuario.router');
const teacherApiRouter = require('./teachers/teacher.router');



router.use('/usuarios', usuarioApiRouter);
router.use('/clientes', esTokenValido, clienteApiRouter);
router.use('/teachers', esTokenValido, teacherApiRouter);




module.exports = router;