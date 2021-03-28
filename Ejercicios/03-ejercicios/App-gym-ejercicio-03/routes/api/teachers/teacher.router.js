const router = require('express').Router();
const { check } = require('express-validator');
const { validarErrores, validarUsuario, validarTeacher } = require('../../../middlewares/index');
const {
    getTeachers,
    getTeacherWithId,
    crearNewTeacher,
    updateTeacher,
    deleteTeacher } = require('../../../controller/teachers.controller');



// Obtener teachers.
router.get('/', getTeachers);

// Obtener teacher por id.
router.get('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(validarTeacher.isIdValidTeacher),
    validarErrores
], getTeacherWithId);

// Crear nuevo teacher en db.
router.post('/', [
    check('nombre', 'El campo nombre es requerido').notEmpty(),
    check('apellidos', 'El campo apellido es requerido').notEmpty(),
    check('edad', 'El campo edad es requerido').notEmpty(),
    check('especialidad', 'El campo especialidad es requerido').notEmpty(),
    validarErrores
], crearNewTeacher);

// Modificar teacher.
router.put('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(validarTeacher.isIdValidTeacher),
    validarUsuario.esRolValido,
    validarErrores
], updateTeacher);

// Eliminar teacher.
router.delete('/:id', [
    check('id')
        .isMongoId()
        .withMessage('No es id valido')
        .custom(validarTeacher.isIdValidTeacher),
    validarUsuario.esRolValido,
    validarErrores
], deleteTeacher);



module.exports = router;