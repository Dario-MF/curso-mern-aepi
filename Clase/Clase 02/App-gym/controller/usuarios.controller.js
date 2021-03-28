const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const registrarUsuario = async (req, res) => {
    try {
        const { username, email, password, rol } = req.body;
        cryptPassword = await bcrypt.hash(password, 12);
        const newUsuario = await Usuario.create({ username, email, password: cryptPassword, rol });
        const token = jwt.sign({ uid: newUsuario._id }, process.env.PRIVATE_KEY_JWT, {
            expiresIn: parseInt(process.env.EXPIRES_IN_JWT)
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
};


const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(403).json({
                error: 'password o email invalido'
            });
        };
        const isValidPassword = bcrypt.compareSync(password, usuario.password);
        if (!isValidPassword) {
            return res.status(403).json({
                error: 'password o email invalido'
            });
        };
        const token = jwt.sign({ uid: usuario._id }, process.env.PRIVATE_KEY_JWT, {
            expiresIn: parseInt(process.env.EXPIRES_IN_JWT)
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
};


module.exports = {
    registrarUsuario,
    loginUsuario
};