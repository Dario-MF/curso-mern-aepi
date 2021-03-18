const { Router } = require('express');
const { check } = require('express-validator');
const { existeClienteId, esEmailUnique } = require('../helpers/validation-db');
const { cambiosForm } = require('../middlewares/cambiosFormulario');
const { validarCampos } = require('../middlewares/validar-campos');
const {
    findAllClients,
    renderNewClient,
    findClientById,
    deleteClientById,
    createNewClient,
    updateClient
} = require('../controllers/clientController');

const router = Router();

// route /client/index GET:
router.get('/index', findAllClients);

// route /client/new GET:
router.get('/new', renderNewClient);

// route /client/editar/:id GET:
router.get('/editar/:id', [
    // express-validator para comprobar id con middlewares
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeClienteId),
    validarCampos
], findClientById);

// route /clientes/delete/:id GET:
router.get('/delete/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeClienteId),
    validarCampos
], deleteClientById);

// route /client/create POST:
router.post('/create', [
    cambiosForm,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(esEmailUnique),
    validarCampos
], createNewClient);

// route /client/update POST:
router.post('/update/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeClienteId),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    cambiosForm,
    validarCampos
], updateClient);




module.exports = router;