const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Usuario = require('../../../models/Usuario');



router.get('/all', async(req, res) => {

   

    res.status(200).json({
        msg: 'ok route usuario/all'
    })

});

// Registrar usuario
router.post('/registro', [
    check('username', 'El campo nombre es requerido').notEmpty(),
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido')
        .custom(async (email) => {
            const esEmailUnico = await Usuario.findOne({email});
            if(esEmailUnico){ 
                throw new Error('El email ya esta en uso');
            };
            return;
        }),
    check('password')
        .notEmpty()
        .withMessage('El campo password es requerido')
        .matches(/^([a-zA-Z0-9@*#]{8,15})$/)
        .withMessage('La password es invalida')

], async(req, res)=> {
    // Validar errores.
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({
            msg: 'error en la petición',
            error: errores.array()
        });
    };
    // Crear usuario
    const { username, email, password } = req.body;
    
    cryptPassword = await bcrypt.hash(password, 12);

    const newUsuario = await Usuario.create({ username, email, password: cryptPassword});
    res.status(200).json({
        msg: 'Usuario registrado correctamente',
        newUsuario
    })
})





module.exports = router;