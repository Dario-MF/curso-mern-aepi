const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
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
    try {
        // Crear usuario
        const { username, email, password, rol } = req.body;
        
        cryptPassword = await bcrypt.hash(password, 12);

        const newUsuario = await Usuario.create({ username, email, password: cryptPassword, rol});
        // generar JWT
        const token = jwt.sign( {uid: newUsuario._id}, process.env.PRIVATE_KEY_JWT,{
            expiresIn: 60 * 10
        }); 
        res.status(200).json({
            msg: 'Usuario registrado correctamente',
            token
        }); 
    } catch (error) {
        res.status(500).json({
            msg: 'error en servidor',
            error
        });
    };
});

// login de usuario
router.post('/login',[
    check('email')
        .notEmpty()
        .withMessage('El campo email es requerido')
        .isEmail()
        .withMessage('El campo email es invalido'),
    check('password')
        .notEmpty()
        .withMessage('El campo password es requerido')
        .matches(/^([a-zA-Z0-9@*#]{8,15})$/)
        .withMessage('La password es invalida')
    // validar JWT
], async (req, res) => {
    // Validar errores.
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
        return res.status(400).json({
            msg: 'error en la petición',
            error: errores.array()
        });
    };
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(403).json({
                error: 'password o email invalido'
            });
            
        };
        const isValidPassword = bcrypt.compareSync(password, usuario.password);
        if(!isValidPassword){
            return res.status(403).json({
                error: 'password o email invalido'
            });
            
        };
        const token = jwt.sign( {uid: usuario._id}, process.env.PRIVATE_KEY_JWT,{
            expiresIn: 60 * 10
        });

        res.status(200).json({
            msg: 'login OK',
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: 'error en servidor',
            error
        });
    };
});




module.exports = router;